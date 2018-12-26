FROM mhart/alpine-node:8.14.1

RUN apk add --no-cache curl bash && rm -rf /var/cache/apk/* && mkdir -p /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --prod

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
ADD . /app
RUN yarn run build && \
  yarn cache clean

HEALTHCHECK CMD curl --fail http://localhost:4000/.well-known/apollo/server-health || exit 1

EXPOSE 4000

CMD ["node", "dist/index.js"]