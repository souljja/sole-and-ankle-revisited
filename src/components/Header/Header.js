import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side>
                    <Actions>
                        <UnstyledButton>
                            <Icon id="shopping-bag" strokeWidth={2}/>
                        </UnstyledButton>
                        <UnstyledButton>
                            <Icon id="search" strokeWidth={2}/>
                        </UnstyledButton>
                        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                            <Icon id="menu" strokeWidth={2}/>
                        </UnstyledButton>
                    </Actions>
                </Side>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const Side = styled.div`
  flex: 1;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px var(--spacing);
  overflow: auto;
  border-bottom: 1px solid var(--gray-300);
  
  @media (${QUERIES.tablet}) {
    align-items: center;
    justify-content: space-between;
    
    ${Side} {
      flex: revert;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7.5vw - 3.5rem, 3rem);
  margin: 0 48px;

  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

const Actions = styled.div`
  display: none;

  @media (${QUERIES.tablet}) {
    display: flex;
    justify-content: flex-end;
    gap: clamp(1rem, 8vw - 1.5rem, 2.5rem);
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
