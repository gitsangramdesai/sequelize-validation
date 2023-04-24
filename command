docker build . -t sangram/apistack
docker images

docker run -p 49160:8080 -d sangram/apistack
docker ps -a

docker-compose up --build

docker ps
docker logs 965687c24890

docker exec -it 965687c24890 /bin/bash
docker kill 965687c24890

docker-compose build


 docker-compose down
 docker rmi ba7a93aae2a8

-- detached mode
docker-compose up --build -d

-- delete all images
docker-compose down --rmi all

docker container ls
docker inspect --format='' 849a854d03c3


 mysql -h 127.0.0.1 -P 3308 -u root -p AppDb
 mysql -h 127.0.0.1 -P 3308 --protocol=tcp -u root


docker volume ls
docker volume rm apistack001_db-data

docker ps -a
docker exec -it d048e4bedfc5 bash


sudo netstat -ntlp

Backup:
sudo su
docker exec 027538d76248 /usr/bin/mysqldump -u root --password=sangram#81 AppDb > /home/sangram/dockerize/apiStack001/db/backup/files/23042023.sql


Restore

cat /home/sangram/dockerize/apiStack001/db/backup/files/23042023.sql | docker exec -i 027538d76248 /usr/bin/mysql -u root --password=sangram#81 AppDb