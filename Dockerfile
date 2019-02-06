FROM nginx:alpine

RUN mkdir /www
COPY index.html /www/index.html
COPY /css /www/css
COPY /js /www/js
COPY nginx.conf /etc/nginx/nginx.conf
