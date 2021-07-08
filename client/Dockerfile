FROM node:14-slim AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --

FROM nginx:1-alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
