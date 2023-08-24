# Base image: Node LTS
FROM node:20.4.0-alpine

# Install PNPM
RUN npm install -g pnpm serve

# Create application directory and move there
WORKDIR /app

# Copy package.json and pnpm-lock.yaml from the host to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the app
RUN pnpm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["pnpm", "serve", "dist"]