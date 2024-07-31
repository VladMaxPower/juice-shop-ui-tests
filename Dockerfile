FROM node:20.2.0
FROM mcr.microsoft.com/playwright:v1.45.3-jammy
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "playwright", "test"]
