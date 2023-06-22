import styled from '@emotion/styled';
import { Form } from 'formik';
import { displayFlex } from 'utils/display-flex';

export const StyledSection = styled.section`
  ${displayFlex}
  gap: 10px;
`

export const StyledForm = styled(Form)`
  ${displayFlex}
  gap: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const StyledButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: grey;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: blue;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`
export const StyledErrorContainer = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
