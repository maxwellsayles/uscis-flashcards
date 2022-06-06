// @flow

import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  const styleObj = {
      fontSize: 26,
      marginTop: "64px",
      textAlign: 'center',
  };
  return <div style={styleObj}>Hello World!</div>;
}

const xx = <HelloWorld />;
const root = document.getElementById('root');
if (root === null) {
  alert('You must specify a <div id="root">');
} else {
  ReactDOM.render(xx, root);
}
