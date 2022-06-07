// @flow

import { Card } from './Card';
import { cardInfos } from './CardInfo';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [idx, setIdx] = useState(0);

  function keyupHandler(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        setIdx(idx > 0 ? idx - 1 : 0);
        break;
      case 'ArrowRight':
        setIdx(idx < cardInfos.length ? idx + 1 : cardInfos.length - 1);
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', keyupHandler);
    return () => window.removeEventListener('keyup', keyupHandler);
  }, []);

  const card = cardInfos[idx];
  return <Card n={card.n} question={card.question} answers={card.answers} />;
}

const idx = 1;
const n = cardInfos[idx].n;
const question = cardInfos[idx].question;
const answers = cardInfos[idx].answers;

const xx = <App />;
const root = document.getElementById('root');
if (root === null) {
  alert('You must specify a <div id="root">');
} else {
  ReactDOM.render(xx, root);
}
