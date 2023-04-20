import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

function NavLink({children, ...delegated}) {
  return <Wrapper {...delegated}>
  <MainText>{children}</MainText>
  <HoverText aria-hidden={true}>{children}</HoverText>
</Wrapper>;
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 500ms;

  transform: translateY(var(--translateFrom));
  
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--translateTo));  
    }
  }
`;

const MainText = styled(Text)`
  --translateFrom: 0%;
  --translateTo: -100%;
`;
const HoverText = styled(Text)`
  --translateFrom: 100%;
  --translateTo: 0%;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
`;
export default NavLink;
