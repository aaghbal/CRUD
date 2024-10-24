all: up

up :
	docker-compose  up

stop:
	docker-compose  stop

down:
	docker-compose  down

start:
	docker-compose  start

ps:
	docker ps

build:
	docker-compose  up --build

fclean:
	rm -rf  database/*
	docker system prune -a -f


re: fclean all