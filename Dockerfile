# Use the official Node.js image as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json files for backend and frontend to the working directory
COPY package*.json ./

# Install dependencies for backend
RUN npm install

# Copy backend server files to the working directory
COPY server/ ./server/

# Install dependencies for frontend
WORKDIR /app/src
RUN npm install

# Copy frontend files to the working directory
COPY src/ ./

# Build the frontend
RUN npm run build

# Expose the port on which your app runs
EXPOSE 3000

# Command to run your application
CMD ["node", "./server/server.js"]
