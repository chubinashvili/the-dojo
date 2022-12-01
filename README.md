# The Dojo

A Project Management App. View the top projects, get a detailed information and add a comment on it if you'd like, also add a project and delete it when It's completed. 

Here is the Live Project - https://project-managementt.web.app/

<p align="center">
  <img alt="Dashboard" src="images/dashboard.PNG" width="45%">
  &nbsp; &nbsp; &nbsp;
  <img alt="ProjectDetails" src="images/projectDetails.PNG" width="45%">
</p>
<p align="center">
  <img alt="CreateProject" src="images/create.PNG" width="45%">
  &nbsp; &nbsp; &nbsp;
  <img alt="Signup" src="images/signup.PNG" width="45%">
</p>

## Getting Started

### Installing

Install the packages by running:
`npm install`

### Configuring

Create `.env` file in the project directory and set values in order to connect your app to the firebase
```
REACT_APP_API_KEY=apiKey
REACT_APP_AUTH_DOMAIN=authDomain
REACT_APP_PROJECT_ID=projectId
REACT_APP_STORAGE_BUCKET=storageBucket
REACT_APP_MESSAGING_SENDER_ID=senderId
REACT_APP_APP_ID=appId
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see auth context state in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
