# Portfolio

JulianGrey.dev acts as a window looking into my development life. First created in 2014 using HTML, CSS, JavaScript and jQuery, I have resurrected and rewritten the code in React to provide a platform to eventually house and link directly to projects past, present and eventually future.

The website lives within the AWS ecosystem, with AWS Amplify supporting the frontend, AWS Lambda providing the backend infrastructure, and AWS DynamoDB handling the database.

For project-specific descriptions, please see the README for the individual projects.


<img width="1512" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/eaa46505-72b8-44e0-9e4c-ddeec1ccdd32" />

## Projects Included

### Portfolio Site

A website written in React, showcasing my ability to communicate with a computer through a keyboard.
- React + Vite frontend

### To Do App

A full-stack todo application with React frontend and Node.js backend, featuring:
- Create, read, update, delete todos
- Persistent storage with DynamoDB
- Clean, responsive UI
- Full testing suite


## Structure

- `frontend/` - React + Vite portfolio website with integrated TodoApp
- `backend/` - Node.js + Express API server with DynamoDB
- Root package.json with scripts to manage both frontend and backend
- Hosted on AWS, using Amplify, Lambda and DynamoDB


## Available Scripts

### Installation
- `npm run install` - Install both frontend and backend dependencies
- `npm run install:frontend` - Install only frontend dependencies  
- `npm run install:backend` - Install only backend dependencies

### Development
- `npm run dev` - Start frontend development server
- `npm run dev:backend` - Start backend API server
- `npm run dev:db` - Start local DynamoDB (Docker required)
- `npm run setup:backend` - Setup local DB and start backend server

### Production
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run test` - Run frontend tests
- `npm run lint` - Lint frontend code
