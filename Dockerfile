FROM node:18-alpine
WORKDIR /app
COPY index.js .
RUN npm install express
ENV APP_VERSION=blue
CMD ["node", "index.js"]
