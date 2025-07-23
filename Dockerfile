# Use a lightweight Python base image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the entire portfolio directory into the container
COPY . /app

# Expose the port the server will listen on
EXPOSE 8000

# Command to run the Python HTTP server
CMD ["python", "-m", "http.server", "8000"]