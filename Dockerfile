# Dockerfile
FROM node:20-alpine

WORKDIR /app
# Copy project files
COPY . .

RUN npm install

# Expose port
EXPOSE 8001

# Start the server
CMD ["npm", "run", "dev"]