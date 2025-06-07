# Use official Node.js base image
FROM node:22

# Set working directory
WORKDIR /server

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start your app
CMD ["node", "server.js"]  
