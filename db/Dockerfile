FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 1111
ENV MYSQL_DATABASE iot

WORKDIR /usr/app/src

ADD ./mysql-init-files /docker-entrypoint-initdb.d

EXPOSE 3306

CMD ["mysqld"]