### STAGE 1: Build ###
FROM node:16.13.2-alpine AS build
WORKDIR /cli-tgq
COPY ./package.json . 
COPY ./package-lock.json .
RUN npm i
COPY . .
### STAGE 2: Run ###
EXPOSE 8080
CMD ["npx","ng","serve","--host=0.0.0.0","--prod=true"]

##############################################################

### STAGE 1: Build ###
#FROM node:16.13.2-alpine AS build
#WORKDIR /cli-tgq
#COPY ./package.json . 
#COPY ./package-lock.json .
#RUN npm i
#COPY . .
#RUN npm run build

### STAGE 2: Run ###
#FROM nginx:1.23.0-alpine 
#COPY --from=build /cli-tgq/dist/tgq_cli /usr/share/nginx/html
#EXPOSE 80
