# Docker-Image für das Backend
FROM python:3.10-slim

WORKDIR /app

COPY ./backend/requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

COPY ./backend /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]