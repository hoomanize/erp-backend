# Git
branches_remove:
	git branch | grep -v "main" | xargs git branch -D

# Local setup
cert_gen:
	openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 \
      -nodes -keyout ./common/ssl-certificates/self-cert.key -out ./common/ssl-certificates/self-cert.crt -subj "/CN=example.com" \
      -addext "subjectAltName=DNS:example.com,DNS:*.example.com,IP:10.0.0.1"