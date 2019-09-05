FROM nginx:alpine

RUN mkdir /www

COPY dist/css /www/css
COPY dist/img /www/img
COPY dist/js /www/js
COPY dist/files /www/files
COPY dist/favicon.ico /www/favicon.ico
COPY dist/index.html /www/index.html

COPY nginx.conf /etc/nginx/nginx.conf
