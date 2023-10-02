# Fortunesoft-MERN

# Frontend Repository ReadMe

This ReadMe file provides instructions for setting up and running the frontend part of the project. Please follow the steps below to get started.

## Project Overview
 The goal of this frontend repository is to implement the user interface and functionality required for the problem statement. Below are the dependencies used in this project:

- Testing library for Jest DOM assertions.
- Testing library for React components.
- Testing library for user events in React components.
- Promise-based HTTP client for making API requests.
- Library for building forms in React.
- React library.
- React library for rendering components to the DOM.
- Library for lazy-loading images in React.
- Library for creating modals in React.
- React component for playing videos.
- Library for routing in React applications.
- React scripts for development, building, testing, and ejecting.
- Library for displaying toast notifications in React.
- Library for displaying pop-up dialogs.
- `Library for measuring web vitals in modern web applications.
- Schema validation library.

## Getting Started

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

bash
git clone <https://github.com/coder-sheshan/Fortunesoft-MERN.git>


### 2. Install Dependencies

Navigate to the project directory and install the required npm packages:

bash
cd frontend
npm install


### 3. Start the Development Server

You can start the development server with the following command:

bash
npm start


This will launch the application in development mode. You can view it in your web browser at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

To build the project for production, use the following command:

bash
npm run build


This command will create a `build` folder with optimized production-ready assets.

### 5. Testing

You can run tests using the following command:

bash
npm test


This will execute the test suite for the project.

### 6. Eject (Optional)

If you need to customize the build configuration, you can eject from `react-scripts`. Use this command to eject:

bash
npm run eject


Please note that ejecting is a one-way operation and should be done with caution.

## Additional Notes

Make sure to refer to the problem statement and design outline provided in the ZIP file for specific project requirements and design details.

If you have any questions or encounter issues, feel free to reach out to the project team for assistance.

Thank you for your contribution to this project!




# Backend Repository ReadMe

This ReadMe file provides instructions for setting up and running the backend part of the project hosted at xyz.com. Please follow the steps below to get started.

Project Overview
This backend repository serves as the server-side component of the project hosted at xyz.com. It provides the necessary APIs, authentication, and data storage for the frontend application. Below are the dependencies used in this project:

bcrypt: Library for hashing and salting passwords.
cors: Middleware for enabling Cross-Origin Resource Sharing.
dotenv: Library for managing environment variables.
express: Web application framework for Node.js.
express-session: Middleware for managing user sessions.
jsonwebtoken: Library for creating and verifying JSON Web Tokens (JWT).
mongod: MongoDB daemon for managing MongoDB databases.
mongodb: Official MongoDB driver for Node.js.
mongoose: ODM (Object-Document Mapping) library for MongoDB.
nodemon: Utility for automatically restarting the server during development.
passport: Authentication middleware for Node.js.
Getting Started
Follow these steps to set up and run the backend server:

1. Clone the Repository
Clone this repository to your local machine using the following command:

bash
Copy code
git clone <https://github.com/coder-sheshan/Fortunesoft-MERN.git>
2. Install Dependencies
Navigate to the project directory and install the required npm packages:

bash
Copy code
cd backend
npm install
3. Set Environment Variables
Create a .env file in the root directory of the backend folder and configure the necessary environment variables. You can use the provided .env.example as a template.

4. Start the Server
You can start the backend server using the following command:

bash
Copy code
npm start
By default, the server will run on port 5000. You can access it locally at http://localhost:5000.