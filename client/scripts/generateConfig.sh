#!/bin/bash
read -p "VITE_WEB_SOCKET_PORT: " ws_port
read -p "VITE_WEB_SOCKET_BASE_URL: " ws_base_url
read -p "SERVER_BASE_URL: " server_base_url
read -p "SERVER_PORT: " server_port

touch ./server/.env
echo '
  VITE_WEB_SOCKET_PORT='$ws_port'
  VITE_WEB_SOCKET_BASE_URL='$ws_base_url'
  SERVER_BASE_URL='$server_base_url'
  SERVER_BASE_URL='$server_port'
' > ./.env