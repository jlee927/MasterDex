from sqlalchemy import Column, String, Text, ForeignKey, Integer
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from app.models.base import Base

class Card(Base):
    __tablename__ = "cards"

    # Primary key from Pokémon TCG API, e.g. "xy1-1"
    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)

    # Supertype (single)
    supertype_id = Column(Integer, ForeignKey("supertypes.id", ondelete="RESTRICT"), nullable=False)

    # Attacks as JSONB
    attacks = Column(JSONB, nullable=True)

    # Images
    image_regular = Column(Text, nullable=True)
    image_large = Column(Text, nullable=True)

    # Relationships
    supertype = relationship("Supertype", back_populates="cards")
    subtypes = relationship("Subtype", secondary="card_subtypes", back_populates="cards")
    types = relationship("Type", secondary="card_types", back_populates="cards")


# Join table for card ↔ subtype
class CardSubtype(Base):
    __tablename__ = "card_subtypes"
    card_id = Column(String, ForeignKey("cards.id", ondelete="CASCADE"), primary_key=True)
    subtype_id = Column(Integer, ForeignKey("subtypes.id", ondelete="RESTRICT"), primary_key=True)


# Join table for card ↔ type
class CardType(Base):
    __tablename__ = "card_types"
    card_id = Column(String, ForeignKey("cards.id", ondelete="CASCADE"), primary_key=True)
    type_id = Column(Integer, ForeignKey("types.id", ondelete="RESTRICT"), primary_key=True)

