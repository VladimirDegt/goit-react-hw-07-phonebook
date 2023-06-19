import AddContactsForm from "./AddContactsForm";
import Contacts from "./Contacts";
import Filter from './Filter';
import { StyledContainer } from './App.styled';

export function App(){
  return(
    <StyledContainer>
      <AddContactsForm/>
      <Filter/>
      <Contacts/>
    </StyledContainer>
  )
};
  


