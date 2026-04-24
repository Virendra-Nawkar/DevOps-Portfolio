# Stage 1 — Install dependencies and build
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files first (layer caching — if packages don't change, this layer is reused)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the Next.js app for production
RUN npm run build

# Stage 2 — Run only the built output (smaller final image)
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only what's needed to run — not the full source code
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/data ./data

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]