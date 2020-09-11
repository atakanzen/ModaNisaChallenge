FROM node:lts-alpine 

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test

EXPOSE 5000

CMD ["node", "server.js"]