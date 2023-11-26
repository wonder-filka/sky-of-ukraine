FROM node:18 as builder

RUN mkdir -p /app

WORKDIR /app

COPY / ./

RUN npm install
RUN npm run build
#RUN rimraf ./build && ./node_modules/.bin/tsc && cp -r ./src/constants/templates/ ./build/constants/templates && cp -r ./src/public/ ./build/public/ && cp -r ./src/assets/ ./build/assets/
RUN ls -la
EXPOSE 80

FROM nginx as production
COPY ci/nginx/default.conf  /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
