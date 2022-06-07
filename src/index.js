// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-table';

type Answers = $ReadOnlyArray<React.Node>;
type Question = React.Node;

type Card = $ReadOnly<{|
  n: number,
  question: React.Node,
  answers?: Answers,
|}>;

function HelloWorld({ n, question, answers }: Card) {
  const answerElems = (answers ?? []).map((answer) => <li>{answer}</li>);

  return (
    <div
      style={{
        marginTop: '64px',
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

const question: React.Node = (
  <div textAlign="left">
    Under our Constitution, some powers belong to the states. What is{' '}
    <em>one</em> power of the states?
  </div>
);
const answers: Answers = [
  'provide schooling and education',
  'provide protection (police)',
  'provide safety (fire departments)',
  'give a driver’s license',
  'approve zoning and land use',
];

const xx = <HelloWorld n={42} question={question} answers={answers} />;
const root = document.getElementById('root');
if (root === null) {
  alert('You must specify a <div id="root">');
} else {
  ReactDOM.render(xx, root);
}
