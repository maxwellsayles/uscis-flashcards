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
    n: 1,
    question: 'What is the supreme law of the land?',
    answers: ['the Constitution'],
  },
  {
    n: 2,
    question: 'What does the Constitution do?',
    answers: [
      'sets up the government',
      'defines the government',
      'protects basic rights of Americans',
    ],
  },
  {
    n: 3,
    question:
      'The idea of self-government is in the first ' +
      'three words of the Constitution. What are ' +
      'these words?',
    answers: ['We the People'],
  },
  {
    n: 4,
    question: 'What is an amendment?',
    answers: [
      'a change (to the Constitution)',
      'an addition (to the Constitution)',
    ],
  },
  {
    n: 5,
    question: 'What do we call the first ten amendments to the Constitution?',
    answers: ['the Bill of Rights'],
  },
  {
    n: 6,
    question: (
      <>
        What is <em>one</em> right or freedom from the First Amendment?*
      </>
    ),
    answers: [
      'speech',
      'religion',
      'assembly',
      'press',
      'petition the government',
    ],
  },
  {
    n: 7,
    question: <>How many amendments does the Constitution have?</>,
    answers: ['twenty-seven (27)'],
  },
  {
    n: 8,
    question: <>What did the Declaration of Independence do?</>,
    answers: [
      'announced our independence (from Great Britain)',
      'declared our independence (from Great Britain)',
      'said that the United States is free (from Great Britain)',
    ],
  },
  {
    n: 9,
    question: (
      <>
        What are <em>two</em> rights in the Declaration of Independence?
      </>
    ),
    answers: ['life', 'liberty', 'pursuit of happiness'],
  },
  {
    n: 10,
    question: 'What is freedom of religion?',
    answers: ['You can practice any religion, or not practice a religion.'],
  },
  {
    n: 11,
    question: 'What is the economic system in the United States?*',
    answers: ['capitalist economy', 'market economy'],
  },
  {
    n: 12,
    question: <>What is the “rule of law”?</>,
    answers: [
      'Everyone must follow the law.',
      'Leaders must obey the law.',
      'Government must obey the law.',
      'No one is above the law.',
    ],
  },
  {
    n: 13,
    question: (
      <>
        Name <em>one</em> branch or part of the government.*
      </>
    ),
    answers: [
      'Congress',
      'legislative',
      'President',
      'executive',
      'the courts',
      'judicial',
    ],
  },
  {
    n: 14,
    question: (
      <>What stops one branch of government from becoming too powerful?</>
    ),
    answers: ['checks and balances', 'separation of powers'],
  },
  {
    n: 15,
    question: 'Who is in charge of the executive branch?',
    answers: ['the President'],
  },
  {
    n: 16,
    question: 'Who makes federal laws?',
    answers: [
      'Congress',
      'Senate and House (of Representatives)',
      '(U.S. or national) legislature',
    ],
  },
  {
    n: 17,
    question: 'What are the two parts of the U.S. Congress?*',
    answers: ['the Senate and House (of Representatives)'],
  },
  {
    n: 18,
    question: 'How many U.S. Senators are there?',
    answers: ['one hundred (100)'],
  },
  {
    n: 19,
    question: 'We elect a U.S. Senator for how many years?',
    answers: ['six (6)'],
  },
  {
    n: 20,
    question: (
      <>
        Who is <em>one</em> of your state’s U.S. Senators now?*
      </>
    ),
    answers: [
      'Maria Cantwell (for Washington State as of 2022)',
      'Patty Murray (for Washington State as of 2022)',
    ],
  },
  {
    n: 21,
    question: <>The House of Representatives has how many voting members?</>,
    answers: ['four hundred thirty-five (435)'],
  },
  {
    n: 22,
    question: <>We elect a U.S. Representative for how many years?</>,
    answers: ['two (2)'],
  },
  {
    n: 23,
    question: <>Name your U.S. Representative.</>,
    answers: ['Pramila Jayapal (for King County area as of 2022)'],
  },
  {
    n: 24,
    question: 'Who does a U.S. Senator represent?',
    answers: ['all people of the state'],
  },
  {
    n: 25,
    question: (
      <>Why do some states have more Representatives than other states?</>
    ),
    answers: [
      '(because of) the state’s population',
      '(because) they have more people',
      '(because) some states have more people',
    ],
  },
  {
    n: 26,
    question: 'We elect a President for how many years?',
    answers: ['four (4)'],
  },
  {
    n: 27,
    question: 'In what month do we vote for President?*',
    answers: ['November'],
  },
  {
    n: 28,
    question: <>What is the name of the President of the United States now?*</>,
    answers: ['(President) Joe Biden'],
  },
  {
    n: 29,
    question: (
      <>What is the name of the Vice President of the United States now?</>
    ),
    answers: ['Kamala Harris'],
  },
  {
    n: 30,
    question: 'If the President can no longer serve, who becomes President?',
    answers: ['the Vice President'],
  },
  {
    n: 31,
    question: (
      <>
        If both the President and the Vice President can no longer serve, who
        becomes President?
      </>
    ),
    answers: ['the Speaker of the House'],
  },
  {
    n: 32,
    question: <>Who is the Commander in Chief of the military?</>,
    answers: ['the President'],
  },
  {
    n: 33,
    question: 'Who signs bills to become laws?',
    answers: ['the President'],
  },
  { n: 34, question: 'Who vetoes bills?', answers: ['the President'] },
  {
    n: 35,
    question: 'What does the President’s Cabinet do?',
    answers: ['advises the President'],
  },
  {
    n: 36,
    question: (
      <>
        What are <em>two</em> Cabinet-level positions?
      </>
    ),
    answers: [
      'Secretary of Agriculture',
      'Secretary of Commerce',
      'Secretary of Defense',
      'Secretary of Education',
      'Secretary of Energy',
      'Secretary of Health and Human Services',
      'Secretary of Homeland Security',
      'Secretary of Housing and Urban Development',
      'Secretary of the Interior',
      'Secretary of Labor',
      'Secretary of State',
      'Secretary of Transportation',
      'Secretary of the Treasury',
      'Secretary of Veterans Affairs',
      'Attorney General',
      'Vice President',
    ],
  },
  {
    n: 37,
    question: 'What does the judicial branch do?',
    answers: [
      'reviews laws',
      'explains laws',
      'resolves disputes (disagreements)',
      'decides if a law goes against the Constitution',
    ],
  },
  {
    n: 38,
    question: <>What is the highest court in the United States?</>,
    answers: ['the Supreme Court'],
  },
  {
    n: 39,
    question: <>How many justices are on the Supreme Court?</>,
    answers: ['nine (9) (as of 2022)'],
  },
  {
    n: 40,
    question: <>Who is the Chief Justice of the United States now?</>,
    answers: ['John Roberts', 'John G. Roberts, Jr.'],
  },
  {
    n: 41,
    question: (
      <>
        Under our Constitution, some powers belong to the federal government.
        What is <em>one</em> power of the federal government?
      </>
    ),
    answers: [
      'to print money',
      'to declare war',
      'to create an army',
      'to make treaties',
    ],
  },
  {
    n: 42,
    question: (
      <>
        Under our Constitution, some powers belong to the states. What is{' '}
        <em>one</em> power of the states?
      </>
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
    n: 43,
    question: 'Who is the Governor of your state now?',
    answers: ['Jay Inslee (for Washington State as of 2022)'],
  },
  {
    n: 44,
    question: 'What is the capital of your state?*',
    answers: ['Olympia, WA (as of 2022)'],
  },
  {
    n: 45,
    question: (
      <>
        What are the <em>two</em> major political parties in the United States?*
      </>
    ),
    answers: ['Democratic and Republican'],
  },
  {
    n: 46,
    question: <>What is the political party of the President now?</>,
    answers: ['Democratic'],
  },
  {
    n: 47,
    question: (
      <>What is the name of the Speaker of the House of Representatives now?</>
    ),
    answers: ['Nancy Pelosi (as of 2022)'],
  },
  {
    n: 48,
    question: (
      <>
        There are four amendments to the Constitution about who can vote.
        Describe <em>one</em> of them.
      </>
    ),
    answers: [
      'Citizens eighteen (18) and older (can vote).',
      'You don’t have to pay (a poll tax) to vote.',
      'Any citizen can vote. (Women and men can vote.)',
      'A male citizen of any race (can vote).',
    ],
  },
  {
    n: 49,
    question: (
      <>
        What is <em>one</em> responsibility that is only for United States
        citizens?*
      </>
    ),
    answers: ['serve on a jury', 'vote in a federal election'],
  },
  {
    n: 50,
    question: (
      <>
        Name <em>one</em> right only for United States citizens.
      </>
    ),
    answers: ['vote in a federal election', 'run for federal office'],
  },
  {
    n: 51,
    question: (
      <>
        What are <em>two</em> rights of everyone living in the United States?
      </>
    ),
    answers: [
      'freedom of expression',
      'freedom of speech',
      'freedom of assembly',
      'freedom to petition the government',
      'freedom of religion',
      'the right to bear arms',
    ],
  },
  {
    n: 52,
    question: (
      <>What do we show loyalty to when we say the Pledge of Allegiance?</>
    ),
    answers: ['the United States', 'the flag'],
  },
  {
    n: 53,
    question: (
      <>
        What is <em>one</em> promise you make when you become a United States
        citizen?
      </>
    ),
    answers: [
      'give up loyalty to other countries',
      'defend the Constitution and laws of the United States',
      'obey the laws of the United States',
      'serve in the U.S. military (if needed)',
      'serve (do important work for) the nation (if needed)',
      'be loyal to the United States',
    ],
  },
  {
    n: 54,
    question: <>How old do citizens have to be to vote for President?*</>,
    answers: ['eighteen (18) and older'],
  },
  {
    n: 55,
    question: (
      <>
        What are <em>two</em> ways that Americans can participate in their
        democracy?
      </>
    ),
    answers: [
      'vote',
      'join a political party',
      'help with a campaign',
      'join a civic group',
      'join a community group',
      'give an elected official your opinion on an issue',
      'call Senators and Representatives',
      'publicly support or oppose an issue or policy',
      'run for office',
      'write to a newspaper',
    ],
  },
  {
    n: 56,
    question: (
      <>When is the last day you can send in federal income tax forms?*</>
    ),
    answers: ['April 15'],
  },
  {
    n: 57,
    question: <>When must all men register for the Selective Service?</>,
    answers: [
      'at age eighteen (18)',
      'between eighteen (18) and twenty-six (26)',
    ],
  },
  {
    n: 58,
    question: (
      <>
        What is <em>one</em> reason colonists came to America?
      </>
    ),
    answers: [
      'freedom',
      'political liberty',
      'religious freedom',
      'economic opportunity',
      'practice their religion',
      'escape persecution',
    ],
  },
  {
    n: 59,
    question: <>Who lived in America before the Europeans arrived?</>,
    answers: ['American Indians', 'Native Americans'],
  },
  {
    n: 60,
    question: (
      <>What group of people was taken to America and sold as slaves?</>
    ),
    answers: ['Africans', 'people from Africa'],
  },
  {
    n: 69,
    question: 'Who is the “Father of Our Country”?',
    answers: ['(George) Washington'],
  },
];
