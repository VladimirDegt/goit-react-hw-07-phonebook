import { Global, css } from '@emotion/react';
import AddContactsForm from './AddContactsForm';
import Contacts from './Contacts';
import Filter from './Filter';
import { StyledContainer } from './App.styled';
// import { GlobalStyles } from 'utils/globalStyles';

export function App() {
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
        <AddContactsForm />
        <Filter />
        <Contacts />
      </StyledContainer>
    </>
  );
}