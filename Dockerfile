FROM node:latest
WORKDIR /home/server
COPY package.json package-lock.json ./
RUN npm install -g json-server
COPY . .
EXPOSE 5173
ENTRYPOINT ["json-server", "--watch", "db.json", "-p", "3001", "--host", "0.0.0.0"]
CMD ["npm", "run", "dev"]