FROM node:21-alpine3.19 AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM node:21-alpine3.19
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 5173
CMD ["npm", "run", "dev"]