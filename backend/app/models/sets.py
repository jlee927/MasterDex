from sqlalchemy import Column, Integer, String, Text, Date, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.models.base import Base

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from app.models.generations import Generation

class Set(Base):
    __tablename__ = "sets"

    id = Column(String, primary_key=True)
    generation_id = Column(Integer, ForeignKey("generations.id"), nullable=False)

    name = Column(Text, nullable=False)
    series = Column(Text)
    printed_total = Column(Integer)
    total = Column(Integer)
    slug = Column(String(255), unique=True)
    ptcgo_code = Column(String)
    release_date = Column(Date)
    image_symbol_url = Column(Text)
    image_logo_url = Column(Text)

    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, onupdate=func.now())

    generation = relationship("Generation", back_populates="sets")

