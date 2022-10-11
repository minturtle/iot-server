FROM node:14


WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./public ./public

CMD ["npm", "start"]