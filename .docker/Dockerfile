FROM node:erbium-alpine

WORKDIR /kobzkobzkobzkobz.com
ENV NODE_ENV production
COPY package*.json .
RUN npm i --silent --only=production
COPY . .
RUN npm run build
EXPOSE 8888
CMD ["npm", "run", "host"]
