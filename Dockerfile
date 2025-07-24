# Use nginx alpine for a lightweight web server
FROM nginx:alpine

# Copy all portfolio files to nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]