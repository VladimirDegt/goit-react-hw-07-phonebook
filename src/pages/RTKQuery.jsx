import { Global, css } from '@emotion/react';
import { StyledContainer } from "components/App.styled";
import AddContactsForm from 'components/rtk-query/AddContactsForm';
import Contacts from 'components/rtk-query/Contacts';
// import { GlobalStyles } from 'utils/globalStyles';

export function RTKQuery(){
  return (
    <>
      {/* {GlobalStyles()} */}
      <Global
        styles={css`
          body {
            font-family: 'Roboto';
          }
        `}
      />
      <StyledContainer>
          <Contacts/>
          <AddContactsForm/>
      </StyledContainer>
     </>
  )
};