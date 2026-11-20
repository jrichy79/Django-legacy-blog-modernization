FROM python:3.9-slim

COPY certs/ssl-inspection.cer /usr/local/share/ca-certificates/ssl-inspection.crt
RUN update-ca-certificates
ENV PIP_CERT=/etc/ssl/certs/ca-certificates.crt

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir "setuptools<81" -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]