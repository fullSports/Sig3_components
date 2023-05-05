FROM node:16.20.0

# RUN apk add --no-cache bash
RUN npm install -g pnpm

USER node

WORKDIR /home/node/app