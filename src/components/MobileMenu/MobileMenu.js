/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogContent, DialogOverlay} from '@reach/dialog';

import {QUERIES} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Backdrop = styled(DialogOverlay)`
  display: none;

  @media (${QUERIES.tablet}) {
    display: initial;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--backdrop);
  }
`;

const Content = styled(DialogContent)`
  margin-left: 75px;
  background-color: var(--white);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 22px 32px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`;

const Navigation = styled.nav`
  display: flex;;
  flex-direction: column;
  gap: 22px;

  & > a {
    font-weight: var(--weight-medium);
    font-size: 1.125rem;
    line-height: 1.313rem;
    text-transform: uppercase;
    color: var(--gray-900);
    text-decoration: none;

    &:first-child {
      color: var(--secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > a {
    font-weight: var(--weight-normal);
    font-size: 0.875rem;
    line-height: 1rem;
    color: var(--gray-700);
    text-decoration: none;
  }
`;

const MobileMenu = ({isOpen, onDismiss}) => (
    <Backdrop isOpen={isOpen} onDismiss={onDismiss}>
        <Content>
            <CloseButton onClick={onDismiss}>
                <VisuallyHidden>Dismiss menu</VisuallyHidden>
                <Icon id="close" strokeWidth={2}/>
            </CloseButton>
            <Navigation>
                <a href="/sale">Sale</a>
                <a href="/new">New&nbsp;Releases</a>
                <a href="/men">Men</a>
                <a href="/women">Women</a>
                <a href="/kids">Kids</a>
                <a href="/collections">Collections</a>
            </Navigation>
            <Footer>
                <a href="/terms">Terms and Conditions</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/contact">Contact Us</a>
            </Footer>
        </Content>
    </Backdrop>

);

export default MobileMenu;
