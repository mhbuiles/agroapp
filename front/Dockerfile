FROM node:latest

WORKDIR /usr/src/

COPY . .

RUN npm install

EXPOSE 3000
VOLUME /usr/src/src/

CMD ["npm", "run", "start"]
