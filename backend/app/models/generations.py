from sqlalchemy import Column, Integer, String, Text, Date, TIMESTAMP
from app.models.base import Base

class Generation(Base):
    __tablename__ = "generations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True)
    description = Column(Text)
    release_date = Column(Date)
    symbol_url = Column(Text)
    image_url = Column(Text)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
