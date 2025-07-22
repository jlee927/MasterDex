from app.models.generations import Generation
from app.db.session import SessionLocal
from datetime import date
from sqlalchemy import select

def add_generation(db_session, generation_data):
    new_gen = Generation(**generation_data)
    db_session.add(new_gen)
    db_session.commit()
    db_session.refresh(new_gen)

    return new_gen

def get_generation():
    session = SessionLocal()
    stmt = select(Generation)
    res = session.scalars(stmt).all()
    session.close()
    print(res)

    return res

get_generation()
