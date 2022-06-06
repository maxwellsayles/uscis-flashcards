// @flow

import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return <div>Hello World!</div>;
}

const xx = <HelloWorld />;
const root = document.getElementById('root');
if (root === null) {
  alert('You must specify a <div id="root">');
} else {
  ReactDOM.render(xx, root);
}
