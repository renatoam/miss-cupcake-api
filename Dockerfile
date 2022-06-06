FROM node:16

# Create app directory
WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3004

CMD ["npm", "run", "server"]
