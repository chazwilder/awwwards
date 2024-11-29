FROM node:21-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Set the public URL environment variable
ENV VITE_PUBLIC_URL=/awwwards

# Build the project
RUN npm run build

# Expose port
EXPOSE 8001

# Start preview server with correct base path
CMD [ "npm", "run", "preview" ]