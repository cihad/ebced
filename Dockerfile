FROM node:14.17.0

WORKDIR /app

COPY yarn.lock package*.json ./
RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]