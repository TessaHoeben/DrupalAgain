import React from 'react';
import ReactDOM from 'react-dom';
window.React1 = require('react');
import { hot } from 'react-hot-loader/root';
import NodeListOnly from "./components/NodeListOnly";

// # Example 1: Simple "Hello, World" code
const Main = hot(() => (
  <NodeListOnly/>
));

ReactDOM.render(
  <Main/>,
  document.getElementById('react-app')
);

