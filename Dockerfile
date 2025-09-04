# Step 1: Build the React (Vite) app
FROM node:18-alpine AS build

WORKDIR /app

# Accept build arguments for env vars
ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_RAWG_API_KEY

# Make them available to Vite during build
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_RAWG_API_KEY=$VITE_RAWG_API_KEY

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Step 2: Serve the build with Nginx
FROM nginx:alpine

# Copy build files to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
