repack-app:
	cd referenceService \
	&& mvn clean package -DskipTests \
	&& cp application/target/application-1.0-SNAPSHOT.jar application/src/main/docker \
	&& cd ../ \

dev:
	docker-compose up database backend_app

stop:
	docker-compose down

build:
	docker-compose build backend_app