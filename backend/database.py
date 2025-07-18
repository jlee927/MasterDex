import psycopg2, os
from dotenv import load_dotenv

load_dotenv()
database, host, username, password, port = (os.getenv(var) for var in ("DATABASE", "HOST", "USERNAME", "PASSWORD", "PORT"))

conn = psycopg2.connect(database=database,
                         host=host,
                         user=username,
                         password=password,
                         port=port,
                         )

cursor = conn.cursor()
