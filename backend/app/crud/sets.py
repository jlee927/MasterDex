from app.models.sets import Set 
# from app.db.session import SessionLocal
# from sqlalchemy import select

def add_set(db_session, set_data):
    new_set = Set(**set_data)
    db_session.add(new_set)
    db_session.commit()
    db_session.refresh(new_set)

    return new_set

