# Word guess game

## Overview

This project is a React application set up with Docker. The application provides a modern UI and features built with React, TypeScript, and Tailwind CSS. Docker is used to containerize the application, making it easy to run in any environment that supports Docker.

## How to Run the Application

To run the application using Docker and Docker Compose, follow these steps:

1. **Install Docker and Docker Compose**

   Ensure that Docker and Docker Compose are installed on your system. You can download Docker from the [official Docker website](https://www.docker.com/get-started) and Docker Compose from the [official Docker Compose documentation](https://docs.docker.com/compose/install/).

2. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/OpenDevEd/OpenDevEd-Wordle.git
   cd OpenDevEd-Wordle
   create folder inside frontend/ called: node_modules   
   
3. **Build and Run the Application**

  Use Docker Compose to build and run the application:
  \```bash
  docker-compose up --build \```
  
This command will:

    Build the Docker images specified in the docker-compose.yml file.
    Start the containers as defined.


4. **Access the Application**

Once the containers are running, open your web browser and navigate to http://localhost:3000 to view the application.

Stop the Application

To stop the running containers, press Ctrl + C in the terminal where Docker Compose is running. You can also use:

bash

    docker-compose down

Approach and Decisions Made
Project Structure

React: Used for building the user interface. React's component-based architecture allows for modular and maintainable code.
TypeScript: Provides static typing, which helps in catching errors early and improves code quality.
Tailwind CSS: Utilized for styling the application with a utility-first approach, enabling rapid UI development.

Docker Setup

Dockerfile: Configures the build process for the React application.
docker-compose.yml: Defines the service for running the React application.
  It sets up a single service that builds the application image and exposes the necessary ports.
