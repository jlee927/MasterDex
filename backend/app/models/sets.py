from sqlalchemy import Column, Integer, String, Text, Date, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from models.base import Base

class Set(Base):
    __tablename__ = "sets"

    id = Column(String, primary_key=True)
    generation_id = Column(Integer, ForeignKey("generations.id"), nullable=False)
    name = Column(Text, nullable=False)
    series = Column(Text)
    printed_total = Column(Integer)
    total = Column(Integer)
    legality_unlimited = Column(Text)
    ptcgo_code = Column(Text)
    release_date = Column(Date)
    updated_at = Column(TIMESTAMP)
    image_symbol_url = Column(Text)
    image_logo_url = Column(Text)
    created_at = Column(TIMESTAMP)
    updated_at_db = Column(TIMESTAMP)

    generation = relationship("Generation")
