// @flow

import { Card } from './Card';
import { cardInfos } from './CardInfo';
import * as React from 'react';
import ReactDOM from 'react-dom';

function handleKeyUp(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowLeft':
      alert('Previous');
      break;
    case 'ArrowRight':
      alert('Next');
      break;
  }
}

document.addEventListener('keyup', handleKeyUp);

const idx = 1;
const n = cardInfos[idx].n;
const question = cardInfos[idx].question;
const answers = cardInfos[idx].answers;

const xx = <Card n={n} question={question} answers={answers} />;
const root = document.getElementById('root');
if (root === null) {
  alert('You must specify a <div id="root">');
} else {
  ReactDOM.render(xx, root);
}
