FROM nginx:alpine

RUN mkdir /www

COPY dist/img /www/img
COPY dist/files /www/files
COPY dist/database /www/database
COPY dist/app.js /www/app.js
COPY dist/favicon.ico /www/favicon.ico
COPY dist/index.html /www/index.html

COPY nginx.conf /etc/nginx/nginx.conf
