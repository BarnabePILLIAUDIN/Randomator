#!/bin/sh
set -e

# Substitute env vars in config.js.template -> config.js
envsubst '${VITE_API_URL}' < /usr/share/nginx/html/config.js.template > /usr/share/nginx/html/config.js

echo "Injected runtime config:"
cat /usr/share/nginx/html/config.js

# Start nginx
exec nginx -g 'daemon off;'
