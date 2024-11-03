# Blog Application

This is a React-based blog application that allows users to view, create, edit, and delete blog posts. It also includes basic authentication for users to register, log in, and log out. The application is structured with multiple reusable components, a simple state management setup, and basic styling.

## Table of Contents

- [Blog Application](#blog-application)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
    - [Explanation](#explanation)
  - [Available Scripts](#available-scripts)
  - [Components](#components)
    - [Main Components](#main-components)
    - [Authentication Components](#authentication-components)
    - [User Management](#user-management)
  - [Utilities](#utilities)
  - [Configuration](#configuration)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x.x)
- npm (>=6.x.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HK-Mikrokraadid/blog.git
   ```

2. Navigate into the project directory:

   ```bash
   cd blog
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will start the application on `http://localhost:3000` by default.

## Project Structure

```plaintext
blog/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── AddPost.js
│   │   ├── AuthContext.js
│   │   ├── Comments.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Logout.js
│   │   ├── NavBar.js
│   │   ├── NotFound.js
│   │   ├── Post.js
│   │   ├── PostPage.js
│   │   ├── Posts.js
│   │   ├── RegisterUser.js
│   │   ├── User.js
│   │   └── Users.js
│   ├── data/
│   │   └── samplePosts.js
│   ├── utils/
│   │   └── formatDate.js
│   ├── App.js
│   ├── App.css
│   ├── config.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── .gitignore
├── package-lock.json
└── package.json
```

### Explanation

- **public**: Static files accessible by the browser.
- **src**: Contains all the source code, including components, configuration, and utility functions.
- **components**: Individual React components that form different parts of the application UI.
- **data**: Includes sample data for posts.
- **utils**: Contains helper functions like date formatting.
- **config.js**: Stores configuration settings.

## Available Scripts

In the project directory, you can run:

- `npm start`: Starts the development server.
- `npm test`: Runs tests in watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

## Components

### Main Components

- **App.js**: The main application component, setting up routes and global settings.
- **NavBar.js**: The navigation bar displayed on every page.
- **Home.js**: The home page showing a list of posts.
- **About.js**: Information about the blog or author.
- **Posts.js**: Displays a list of posts.
- **Post.js**: Displays individual post details.
- **PostPage.js**: Page to view a specific post with comments.
- **AddPost.js**: Form for creating a new post.
- **Comments.js**: Displays comments related to a post.

### Authentication Components

- **Login.js**: Allows users to log into the application.
- **RegisterUser.js**: Allows new users to register.
- **Logout.js**: Logs users out of the application.

### User Management

- **User.js**: Displays individual user information.
- **Users.js**: Lists all users in the application.

## Utilities

- **formatDate.js**: Helper function to format dates for display.

## Configuration

The **config.js** file holds environment-specific configurations such as API endpoints. Modify this file as needed for different deployment environments.
