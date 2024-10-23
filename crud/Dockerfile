FROM node:20-bullseye

WORKDIR /app

RUN npm install -g next

COPY package*.json .

RUN npm install pg

RUN npm install

RUN npm i --save-dev @types/pg

RUN npm install @prisma/client
RUN npm install --save-dev prisma

COPY . .

CMD [ "npm", "run", "dev" ]