from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from config import Config
import json

DB_URL = f"postgresql+psycopg2://{Config.DB_USER}:{Config.DB_PASSWORD}@{Config.DB_HOST}:{Config.DB_PORT}/{Config.DB_NAME}"
engine = create_engine(DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    location = Column(String, nullable=True)
    languages = Column(String, nullable=True)  # Comma-separated string
    offers = Column(Text, nullable=True)       # JSON string
    wants = Column(Text, nullable=True)        # JSON string

# Create tables
Base.metadata.create_all(bind=engine)

def create_user(name, email, password, location=None, languages=None, offers=None, wants=None):
    session = SessionLocal()
    try:
        user = User(
            name=name,
            email=email,
            password=password,
            location=location,
            languages=languages,
            offers=json.dumps(offers) if offers else None,
            wants=json.dumps(wants) if wants else None
        )
        session.add(user)
        session.commit()
        return user.id
    except Exception as e:
        session.rollback()
        raise e
    finally:
        session.close()

def get_user_by_email_and_password(email, password):
    session = SessionLocal()
    user = session.query(User).filter_by(email=email, password=password).first()
    session.close()
    return user

def get_user_by_id(user_id):
    session = SessionLocal()
    user = session.query(User).filter_by(id=user_id).first()
    session.close()
    return user

def update_user_profile(user_id, data):
    session = SessionLocal()
    user = session.query(User).filter_by(id=user_id).first()
    if not user:
        session.close()
        raise Exception('User not found')
    for key, value in data.items():
        if hasattr(user, key):
            if key in ['offers', 'wants']:
                setattr(user, key, json.dumps(value))
            else:
                setattr(user, key, value)
    session.commit()
    session.close()
