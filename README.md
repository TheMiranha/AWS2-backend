## Para fazer o setup do devops

* docker-compose up setup
* docker-compose up -d
* docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data -v /var/run/docker.sock:/var/run/docker.sock --name uptime-kuma louislam/uptime-kuma:1

### Resetar as senhas dos serviços

docker-compose exec elasticsearch bin/elasticsearch-reset-password --batch --user elastic
docker-compose exec elasticsearch bin/elasticsearch-reset-password --batch --user logstash_internal
docker-compose exec elasticsearch bin/elasticsearch-reset-password --batch --user kibana_system

É necessário subir um redis