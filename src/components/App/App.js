import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import {QUERIES} from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: calc(2 * var(--spacing)) var(--spacing);
  
  @media (${QUERIES.tablet}) {
    padding: calc(1.5 * var(--spacing)) var(--spacing);
  }

  @media (${QUERIES.mobile}) {
    padding: calc(3 * var(--spacing)) var(--spacing);
  }
`;

export default App;
