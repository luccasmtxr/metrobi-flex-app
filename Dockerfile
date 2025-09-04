# --- Build stage ---
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all source
COPY . .

# Build app (Vite output in /app/dist)
RUN npm run build

# --- Production stage ---
FROM node:22-alpine

WORKDIR /app

# Install a tiny static file server
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Serve the build
CMD ["serve", "-s", "dist", "-l", "3000"]
