FROM node:16
WORKDIR /usr/src/app
RUN npm install -g serve
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["serve", "build"]