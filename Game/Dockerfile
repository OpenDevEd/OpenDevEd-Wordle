FROM node:latest

WORKDIR /app

COPY *.json /app/

RUN npm install --force

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]