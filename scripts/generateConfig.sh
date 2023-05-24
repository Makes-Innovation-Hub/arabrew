#!/bin/bash
read -p "PORT: " port
read -p "NODE_ENVIRONMENT: " node_env
read -p "WEB_SOCKET_PORT: " web_socket_port
read -p "MONGO_DB_CONNECTION_STRING: " mongo_uri
read -p "OPEN_AI_API_KEY: " open_ai_api_key

touch ./server/.env
echo '
  PORT='$port',
  NODE_ENV='$node_env',
  WEB_SOCKET_PORT='$web_socket_port',
  MONGO_URI='$mongo_uri',
  OPEN_AI_API_KEY='$open_ai_api_key'
' > ./server/.env