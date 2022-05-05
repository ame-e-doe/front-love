<<<<<<< HEAD
# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
=======
## React Hooks: JWT Authentication (without Redux) example

For more detail, please visit:
> [React Hooks: JWT Authentication & Authorization (without Redux) example](https://bezkoder.com/react-hooks-jwt-auth/)

> [React Redux Login, Logout, Registration example with Hooks](https://bezkoder.com/react-hooks-redux-login-registration-example/)

> [React (Components) JWT Authentication & Authorization example](https://bezkoder.com/react-jwt-auth/)

Fullstack (JWT Authentication & Authorization example):
> [React + Spring Boot](https://bezkoder.com/spring-boot-react-jwt-auth/)

> [React + Node.js Express](https://bezkoder.com/react-express-authentication-jwt/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Set port
.env
```
PORT=8081
```

### Note:
Open `src/services/auth-header.js` and modify `return` statement for appropriate back-end (found in the tutorial).

```js
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 'x-access-token': user.accessToken };             // for Node.js Express back-end
  } else {
    return {};
  }
}
```

### Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.

### Related Posts
> [In-depth Introduction to JWT-JSON Web Token](https://bezkoder.com/jwt-json-web-token/)

> [React CRUD example using Hooks](https://bezkoder.com/react-hooks-crud-axios-api/)

> [React Pagination using Hooks example](https://bezkoder.com/react-pagination-hooks/)

> [React Hooks File Upload example](https://bezkoder.com/react-hooks-file-upload/)

Fullstack with Node.js Express:
> [React.js + Node.js Express + MySQL](https://bezkoder.com/react-node-express-mysql/)

> [React.js + Node.js Express + PostgreSQL](https://bezkoder.com/react-node-express-postgresql/)

> [React.js + Node.js Express + MongoDB](https://bezkoder.com/react-node-express-mongodb-mern-stack/)

Fullstack with Spring Boot:
> [React.js + Spring Boot + MySQL](https://bezkoder.com/react-spring-boot-crud/)

> [React.js + Spring Boot + PostgreSQL](https://bezkoder.com/spring-boot-react-postgresql/)

> [React.js + Spring Boot + MongoDB](https://bezkoder.com/react-spring-boot-mongodb/)

Fullstack with Django:
> [React.js Hooks + Django Rest Framework](https://bezkoder.com/django-react-hooks/)

Serverless:
> [React Hooks Firebase Realtime Database: CRUD App ](https://bezkoder.com/react-firebase-hooks-crud/)

> [React Hooks Firestore example: CRUD App](https://bezkoder.com/react-hooks-firestore/)

Integration (run back-end & front-end on same server/port)
> [Integrate React with Spring Boot](https://bezkoder.com/integrate-reactjs-spring-boot/)

> [Integrate React with Node.js Express](https://bezkoder.com/integrate-react-express-same-server-port/)
>>>>>>> d41fa5d (estrutura inicial front)
