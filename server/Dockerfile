FROM node:21-alpine3.19 AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM node:21-alpine3.19
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:dev"]