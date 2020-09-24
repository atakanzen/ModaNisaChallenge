# ModaNisaChallenge [![Build Status](https://travis-ci.com/ataknz/ModaNisaChallenge.svg?token=24UZ7R8aV1D6Fc6qevvx&branch=master)](https://travis-ci.com/ataknz/ModaNisaChallenge)

This is an application developed for **ModaNisa's** Technologist challenge. It was a great journey for me as well,
learned a lot of new technologies.

## Tech Stack

* **Vue.js**

* **Express.js**

* **Node.js**

* **MongoDBAtlas**

* **TailwindCSS**

## API Architecture

* The **API** runs on `:5000/api/todos`.

* Used Node and Express. 

* The Router requests are:

  - **GET**: Gets All of the ToDo items.
  - **POST**: Adds a ToDo item.
  - **PUT**: Updates a ToDo item as done or undone.
  - **DELETE**: Deletes a ToDo item.
  
* Integrated Mongo Models with API, so all of the states are stored in database.

## Dockerization

* Implemented Dockerfiles both to client and server folders of the application.

* Using Docker-Compose in the root folder for integration

#### Client Dockerfile
```
# Build stage
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Using **NginX** for the web server for its high performance and reverse proxy ability.


#### Server Dockerfile
```
FROM node:lts-alpine 

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
```

## Testing & Tools

* **Client Side**

  - **VUE/CLI Test-Utils**: *Jest* for unit tests and *Cypress* for end-to-end tests.
  
  Usage:
  ```
  cd client/
  
  npm run test:unit
  
  npm run test:e2e
  ```
* **Server Side**

  - **Mongo-Memory-Server**: Used for mocking database while test process.
  - **MOCHA & CHAI & SUPERTEST**: Used for testing API endpoints
  
  Usage:
  ```
  cd server/
  
  npm run test
  ```
  
* **Automation**

  - Used **Travis CI** and integrated it with **Github** to automate test processes for both sides of application. Current status badge is also implemented above.
  
## Developing

You can simply enter a development environment by running these commands in the root.

```
cd server/

npm run dev
```
Implemented `concurrently`for running both the client and the server on local.

## Deployment & DevOps

  - Deployed to a **DigitalOcean** cluster.
  
  - Used **Nginx**, **Ubuntu** and **Docker**
  
  - Implemented **SSH** security credentials for cloning of the Github repository to the server.
  
  - Starting application by using `docker-compose up` within the server.
  
  - Added a custom domain as well. You can visit the application from [here](http://to-dos.live)
  
## Conclusion

As I've mentioned earlier, this was a great journey for me since I've learned so much while developing this application.
Dockerization and deployment were not something that I've done before, so I had some learning curves on these contexts. But I'm very glad that I had the chance
to get my hands dirty. I've also learned about Test-Driven-Development, which I've found it very coherent. It's great to see that there is so much to learn. 


Have a great day!

