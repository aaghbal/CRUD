FROM node:20-bullseye

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /app


RUN npm install -g next


COPY package*.json ./


RUN npm install pg
RUN npm install
RUN npm i --save-dev @types/pg
RUN npm install @prisma/client
RUN npm install --save-dev prisma


COPY . .


RUN chmod +x /app/script.sh


CMD ./script.sh