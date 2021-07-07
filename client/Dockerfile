FROM node:10-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1-alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
