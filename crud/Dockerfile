FROM node:20-bullseye

RUN npm install -g next

WORKDIR /app

COPY package*.json ./


RUN npm install 

COPY . .

EXPOSE 3000

RUN chmod +x /app/script.sh


CMD ./script.sh