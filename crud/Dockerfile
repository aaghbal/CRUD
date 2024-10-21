FROM node:20-bullseye

WORKDIR /app

RUN npm install -g next

COPY package*.json .

RUN npm install pg

RUN npm install

RUN npm i --save-dev @types/pg

COPY . .

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]