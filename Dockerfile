FROM node:16.13.2-alpine AS build

WORKDIR /cli-tgq

COPY ./package.json . 

COPY ./package-lock.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:1.23.0-alpine 

COPY --from=build /cli-tgq/dist/tgq_cli /usr/share/nginx/html

EXPOSE 80