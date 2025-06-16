# Use official Nginx image
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files to Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

