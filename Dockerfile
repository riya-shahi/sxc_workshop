FROM node:20

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port (optional)
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
