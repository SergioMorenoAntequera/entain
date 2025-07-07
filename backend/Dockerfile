# Step 1: Use official Node.js image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Install dependencies (including nodemon for development)
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the backend app code
COPY . .

# Step 5: Expose the backend port (3000 for your app)
EXPOSE 3000

# Step 6: Start the backend server with nodemon for live-reloading
CMD ["npm", "run", "start:dev"] 