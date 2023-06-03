container_name := react-docker-project
dc := docker compose
de := docker exec -it

init: build up


build:
	$(dc) build --no-cache
	$(dc) up -d
	$(MAKE) modules/cp
	$(dc) down

up:
	$(dc) up


y/install:
	$(de) $(container_name) sh -c "yarn install --frozen-lockfile"
	$(MAKE) modules/cp

y/add:
	$(de) $(container_name) sh -c "yarn add $(p)"
	$(MAKE) modules/cp

y/add-D:
	$(de) $(container_name) sh -c "yarn add -D $(p)"
	$(MAKE) modules/cp

y/remove:
	$(de) $(container_name) sh -c "yarn remove $(p)"
	$(MAKE) modules/cp

y/cache/clean:
	$(de) $(container_name) sh -c "yarn cache clean"
	$(MAKE) modules/cp

y/outdated:
	$(de) $(container_name) sh -c "yarn outdated"

y/upgrade:
	$(de) $(container_name) sh -c "yarn upgrade $(p)"
	$(MAKE) modules/cp

y/info:
	$(de) $(container_name) sh -c "yarn info $(p)"

y/build:
	$(de) $(container_name) sh -c "yarn build"

y/dev:
	$(de) $(container_name) sh -c "yarn dev --host"


exec:
	$(de) $(container_name) sh

exec-c:
	$(de) $(container_name) sh -c "$(c)"

modules/cp:
	docker container cp $(container_name):/app/node_modules .

rm/modules:
	$(de) $(container_name) sh -c "rm -rf node_modules"
	rm -rf node_modules

rm/build:
	rm -rf dist
	rm -rf storybook-static
	rm -rf build-storybook.log

env/cp:
	cp .env.sample .env.development.local

open/web:
	open http://localhost:3000


help:
	cat ./docs/make-help.txt
