FROM node:latest

WORKDIR /usr/src/

COPY . .

RUN npm install

EXPOSE 3000
VOLUME /usr/src/

CMD ["npm", "run", "start"]
