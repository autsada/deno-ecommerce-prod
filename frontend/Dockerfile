FROM node:14-alpine
WORKDIR /app
COPY  package.json .
COPY  package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]