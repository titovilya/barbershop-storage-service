repack-app:
	cd administrationService \
	&& mvn clean package -DskipTests \
	&& cp application/target/application-1.0-SNAPSHOT.jar application/src/main/docker \
	&& cd ../ \

dev:
	docker-compose up database backend_app app_ui

stop:
	docker-compose down

build:
	make build-ui \
	&& make build-back

build-ui:
	docker-compose build app_ui

build-back:
	docker-compose build backend_app

migrate:
	cd administrationService/
	mvn clean install liquibase:diff
	mvn liquibase:update

db-clean:
	mvn liquibase:dropAll