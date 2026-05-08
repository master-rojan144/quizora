FROM node:24.15.0

WORKDIR /quizora

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
