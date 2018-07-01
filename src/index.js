// initialize bugsnag ASAP, before other imports
import bugsnag from 'bugsnag-js'
const bugsnagClient = bugsnag('YOUR-API_KEY')

// Exercise 1: Render It
// import React
// import ReactDOM
// import App
// import styles
// render App component into app-root element

import ReactDOM from 'react-dom'
import React from 'react'
import createPlugin from 'bugsnag-react'
import './style.css';
import App from './App.jsx';


console.log(bugsnagClient);
const ErrorBoundary = bugsnagClient.use(createPlugin(React));
console.log(ErrorBoundary);

// wrap your entire app tree in the ErrorBoundary provided
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app-root')
)

bugsnagClient.notify(new Error('Props for daysssss'))
