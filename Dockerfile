# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Install serve to run the built project
RUN npm install -g serve

# Expose port
EXPOSE 8001

# Start the server
CMD ["serve", "-s", "dist", "-l", "8001"]