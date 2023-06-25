#!/bin/bash
read -p "VITE_WEB_SOCKET_PORT: " ws_port
read -p "VITE_WEB_SOCKET_BASE_URL: " ws_base_url
read -p "VITE_SERVER_BASE_URL: " server_base_url
read -p "VITE_SERVER_PORT: " server_port

touch ./server/.env
echo '
  VITE_WEB_SOCKET_PORT='$ws_port'
  VITE_WEB_SOCKET_BASE_URL='$ws_base_url'
  VITE_SERVER_BASE_URL='$server_base_url'
  VITE_SERVER_PORT='$server_port'
' > ./.env