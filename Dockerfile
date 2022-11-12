FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install next react react-dom

COPY . .

CMD [ "npx", "next", "build"] [ "npx", "next", "start"]
