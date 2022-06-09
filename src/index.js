// @flow

import { Card } from './Card';
import { cardInfos } from './CardInfo';
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import type { CardInfo } from './CardInfo';

function App({ cardInfos }: { cardInfos: $ReadOnlyArray<CardInfo> }) {
  const [idx, _setIdx] = useState(0);
  const [showAnswers, _setShowAnswers] = useState(false);

  const idxRef = useRef(idx);
  const setIdx = (x) => {
    idxRef.current = x;
    _setIdx(x);
  };
  const showAnswersRef = useRef(showAnswers);
  const setShowAnswers = (x) => {
    showAnswersRef.current = x;
    _setShowAnswers(x);
  };

  function keyupHandler(event: KeyboardEvent) {
    const idx = idxRef.current;
    const showAnswers = showAnswersRef.current;
    switch (event.key) {
      case 'ArrowLeft':
        if (!showAnswers) {
          setIdx(idx > 0 ? idx - 1 : cardInfos.length - 1);
        } else {
          setShowAnswers(false);
        }
        break;
      case 'ArrowRight':
        if (!showAnswers) {
          setShowAnswers(true);
        } else {
          setShowAnswers(false);
          setIdx(idx + 1 == cardInfos.length ? 0 : idx + 1);
        }
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', keyupHandler);
    return () => window.removeEventListener('keyup', keyupHandler);
  }, []);

  const ci = cardInfos[idx];
  const card = showAnswers ? (
    <Card n={ci.n} question={ci.question} answers={ci.answers} />
  ) : (
    <Card n={ci.n} question={ci.question} />
  );
  return (
    <div
      style={{
        margin: '100px auto auto auto',
        width: '60%',
        textAlign: 'center',
      }}
    >
      {card}
    </div>
  );
}

const shuffledCardInfos = [...cardInfos].sort(() => Math.random() - 0.5);
const xx = <App cardInfos={shuffledCardInfos} />;
const root = document.getElementById('root');
if (root === null) {
  alert('You must specify a <div id="root">');
} else {
  ReactDOM.render(xx, root);
}
