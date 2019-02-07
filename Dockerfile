FROM nginx:alpine

RUN mkdir /www
COPY dist/index.html /www/index.html
COPY dist/css /www/css
COPY dist/js /www/js
COPY dist/img /www/img
COPY nginx.conf /etc/nginx/nginx.conf
