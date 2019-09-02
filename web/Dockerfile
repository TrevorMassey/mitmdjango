FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /project & mkdir /data
WORKDIR /project
COPY requirements.txt .
RUN pip3 install --upgrade pip
RUN pip install -r requirements.txt
