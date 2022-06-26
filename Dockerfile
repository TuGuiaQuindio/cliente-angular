FROM node:16.13.2-alpine AS build

WORKDIR /tgq_cli

COPY ./package.json . 

COPY ./package-lock.json .

RUN npm i 

COPY . .

EXPOSE 8080

CMD ["npx","ng","serve","--host=0.0.0.0","--prod=true"]

# EXPOSE 80