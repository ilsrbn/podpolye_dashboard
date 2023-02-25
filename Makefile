DOCKER_NAME=vite_docker
CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
#DIR_BASENAME=$(shell basename $(CURRENT_DIR))
ROOT_DIR=$(CURRENT_DIR)
PROJECT_DIR=src
CURRENT_USER=sudo
DOCKER_COMPOSE?=docker-compose
DOCKER_COMPOSE_RUN=$(DOCKER_COMPOSE) run --rm
DOCKER_EXEC_TOOLS_APP=$(CURRENT_USER) docker exec -d -it $(DOCKER_NAME) sh
NODE_INSTALL="npm i"
SERVER_RUN="npm run dev"
SERVER_BUILD="npm run build"
SERVER_PREVIEW="npm run preview"

#
# Exec containers
#
.PHONY: app

app:
	$(DOCKER_EXEC_TOOLS_APP)

#
# Helpers
#
.PHONY: fix-permission

fix-permission:
	$(CURRENT_USER) chown -R ${USER}: $(ROOT_DIR)/

#
# Commands
#
.PHONY: build install dev up start first stop restart clear

build:
	$(DOCKER_COMPOSE) up --build --no-recreate -d

install:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)

dev:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_BUILD)

app_build:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_RUN)

run_preview:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_PREVIEW)

up:
	$(DOCKER_COMPOSE) up -d

start: up dev

first: app_build build install dev

first_preview: app_build build install run_preview

preview: up run_preview

stop: $(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) kill || true
	$(DOCKER_COMPOSE) rm --force || true

restart: stop start dev

clear: stop $(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) down -v --remove-orphans || true

