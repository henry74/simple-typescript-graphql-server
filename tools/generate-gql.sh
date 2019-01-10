#!/usr/bin/env bash

# ROOT_DIR='.'
PORT='9898'

<<<<<<< HEAD
PORT=$PORT ts-node src/index.ts &
SERVER_PID=$!

sleep 4s

=======
PORT=$PORT ts-node src/index.ts & SERVER_PID=$!
sleep 3
>>>>>>> 11be0033ec10b7f8612ce28a0beddbbfdbb4a5f7
gql-gen --config ./tools/codegen.yml 

kill -9 $SERVER_PID
kill -9 $(lsof -t -i:${PORT})

exit 0
