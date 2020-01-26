FROM nginx:alpine

RUN mkdir /www

COPY dist/database /www/database
COPY dist/files /www/files
COPY dist/img /www/img
COPY dist/js /www/js
COPY dist/favicon.ico /www/favicon.ico
COPY dist/index.html /www/index.html
COPY dist/404.html /www/404.html

COPY nginx.conf /etc/nginx/nginx.conf
