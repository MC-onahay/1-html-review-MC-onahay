FROM php:7.4-apache

LABEL maintainer="Madison McConahay"

RUN docker-php-ecxt-install pdo_mysql

#copy public to working directory
COPY app /srv/app

#apache config
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

#php cpnfig
copy docker/php/php.ini /usr/local/etc/php/php.ini

#set working director in image
WORKDIR /srv/app
