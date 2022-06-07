// @flow

import * as React from 'react';

import type { CardInfo } from './CardInfo';

export function Card({ n, question, answers }: CardInfo): React.Node {
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
