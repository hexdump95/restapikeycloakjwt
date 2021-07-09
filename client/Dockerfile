FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --

FROM nginx:1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/client /usr/share/nginx/html
