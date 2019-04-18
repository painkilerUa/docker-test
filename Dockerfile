FROM node:8

WORKDIR /usr/app

COPY src/ .
RUN npm install --quiet