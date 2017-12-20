FROM node:8.9-alpine

USER node
WORKDIR /home/node

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
