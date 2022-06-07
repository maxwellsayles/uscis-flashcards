// @flow

import * as React from 'react';

type Answers = $ReadOnlyArray<React.Node>;
type Question = React.Node;

export type CardInfo = $ReadOnly<{|
  n: number,
  question: React.Node,
  answers?: Answers,
|}>;

export const cardInfos: $ReadOnlyArray<CardInfo> = [
  {
    n: 42,
    question: (
      <div textAlign="left">
        Under our Constitution, some powers belong to the states. What is{' '}
        <em>one</em> power of the states?
      </div>
    ),
    answers: [
      'provide schooling and education',
      'provide protection (police)',
      'provide safety (fire departments)',
      'give a driver’s license',
      'approve zoning and land use',
    ],
  },

  {
    n: 69,
    question: 'Who is the “Father of Our Country”?',
    answers: ['(George) Washington'],
  },
];
