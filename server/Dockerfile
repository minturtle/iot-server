FROM node:14

WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install

COPY db.js ./
COPY index.js ./

RUN git clone https://github.com/vishnubob/wait-for-it

CMD ["node", "index.js"]