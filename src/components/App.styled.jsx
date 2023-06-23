import styled from '@emotion/styled';
import { NavLink as link } from 'react-router-dom';
import { displayFlex } from 'utils/display-flex'

export const StyledContainer = styled.div`
    gap: 20px;
    text-align: center;
    ${displayFlex}

    h1, h2 {
      margin: 0;
    }
`
export const StyledLink = styled(link)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
`