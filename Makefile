# Local setup
cert_gen:
	openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 \
      -nodes -keyout ./common/ssl-certificates/hoomalocal.key -out ./common/ssl-certificates/hoomalocal.crt -subj "/CN=hooma.local"
	find services -type d -name ssl-certificates -exec cp -f common/ssl-certificates/hoomalocal.key {} \;
	find services -type d -name ssl-certificates -exec cp -f common/ssl-certificates/hoomalocal.crt {} \;

# Sync configs
ts_config_sync:
	find services -mindepth 1 -type d -exec cp -f tsconfig.json {} \;

# Git
branches_remove:
	git branch | grep -v "main" | xargs git branch -D

# Docker
docker_prune:
	docker system prune --all --volumes
