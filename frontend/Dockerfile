# Step 1: Use official Node.js image for development
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the frontend app code
COPY . .

# Step 5: Expose the dev server port (Vite or React typically runs on 5173)
EXPOSE 5173

# Step 6: Start the development server (Vite, React, or Webpack)
CMD ["npm", "run", "dev"]  