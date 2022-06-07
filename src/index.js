// @flow

import { cardInfos } from './CardInfo';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-table';

import type { CardInfo } from './CardInfo';

function Card({ n, question, answers }: CardInfo) {
  const answerElems = (answers ?? []).map((answer) => <li>{answer}</li>);

  return (
    <div
      style={{
        margin: '100px auto auto auto',
        width: '60%',
        textAlign: 'center',
      }}
    >
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <h2>{n}.</h2>
            </td>
            <td align="left">
              <h2>{question}</h2>
            </td>
          </tr>
          <tr>
            <td />
            <td align="left">{answerElems}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

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
