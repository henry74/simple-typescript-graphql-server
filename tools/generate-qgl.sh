#!/usr/bin/env bash

# ROOT_DIR='.'
PORT='9898'

PORT=$PORT yarn dev &
SERVER_PID=$!

sleep 1s

# yarn schema-download --endpoint=http://localhost:${PORT}/graphql
yarn generate 

# ${ROOT_DIR}/node_modules/.bin/apollo codegen:generate \
#   --endpoint=http://localhost:${PORT}/graphql \
#   --target typescript \
#   --header 'Authorization: Bearer [INSERT_TOKEN_HERE]'

kill -9 $SERVER_PID
kill -9 $(lsof -t -i:${PORT})

exit 0