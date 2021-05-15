FROM node:14

RUN apt update && apt install -y git curl
RUN chown -R node:node /home/node