FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8001

CMD [ "npm", "run", "preview" ]