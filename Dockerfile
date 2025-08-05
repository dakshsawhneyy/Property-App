FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

FROM node:21-alpine

COPY --from=builder /app ./

EXPOSE 5173

CMD ["npm","run","dev"]