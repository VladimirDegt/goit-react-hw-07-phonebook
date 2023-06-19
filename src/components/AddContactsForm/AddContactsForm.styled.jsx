import styled from '@emotion/styled';
import { displayFlex } from 'utils/display-flex';

export const StyledSection = styled.section`
  ${displayFlex}
  gap: 10px;
`

export const StyledForm = styled.form`
  ${displayFlex}
  gap: 5px;
`

export const StyledButton = styled.button`
  background-color: grey;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: blue;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`