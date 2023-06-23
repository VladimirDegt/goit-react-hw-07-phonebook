import { Global, css } from '@emotion/react';
import AddContactsForm from "components/AddContactsForm";
import { StyledContainer } from "components/App.styled";
import Contacts from "components/Contacts";
import Filter from "components/Filter";
// import { GlobalStyles } from 'utils/globalStyles';

export function Toolkit(){
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
        {/* <AddContactsForm />
        <Filter />
        <Contacts /> */}
      </StyledContainer>
     </>
  )
};