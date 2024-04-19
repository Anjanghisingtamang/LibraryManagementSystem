# Use an official Node.js image as a base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or whichever port your Node.js app listens on)
EXPOSE 3000

# Start the Node.js server
CMD ["node", "build/index.js"]