import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({sortId, setSortId}) => {
    const breadcrumbs = (
        <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">
                Shoes
            </Breadcrumbs.Crumb>
        </Breadcrumbs>
    );

    return (
        <Wrapper>
            <MainColumn>
                <Header>
                    <LeftHeaderColumn>
                        {breadcrumbs}
                        <Title>Running</Title>
                    </LeftHeaderColumn>
                    <RightHeaderColumn>
                        <Select
                            label="Sort"
                            value={sortId}
                            onChange={(ev) => setSortId(ev.target.value)}
                        >
                            <option value="newest">Newest Releases</option>
                            <option value="price">Price</option>
                        </Select>
                    </RightHeaderColumn>
                </Header>
                <Spacer size={32}/>
                <ShoeGrid/>
            </MainColumn>
            <LeftColumn>
                {breadcrumbs}
                <Spacer size={42}/>
                <ShoeSidebar/>
            </LeftColumn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (${QUERIES.tablet}) {
    align-items: flex-end;
  }
`;

const LeftHeaderColumn = styled.div`
  & > :first-child {
    display: none;
  }
  
  @media (${QUERIES.tablet}) {
    display: flex;
    flex-direction: column;
    
    & > :first-child {
      display: flex;
    }
  }
`;

const RightHeaderColumn = styled.div`
  @media (${QUERIES.mobile}) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
