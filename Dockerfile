# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY tsconfig*.json ./
COPY src ./src

RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS runner
WORKDIR /usr/src/app

# Copy only production deps
COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3300
CMD ["node", "dist/main.js"]
