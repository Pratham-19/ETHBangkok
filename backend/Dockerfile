FROM node:20

ENV DSTACK_SIMULATOR_ENDPOINT="http://host.docker.internal:8090"


WORKDIR /app


COPY package.json /app

RUN npm install

COPY tsconfig.json ./


COPY . /app

# RUN npm run build

CMD ["npm","run","dev"]
