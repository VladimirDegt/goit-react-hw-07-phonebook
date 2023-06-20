import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsState } from "store/selectors";
import { getContactsThunk } from "store/sliceReducer";
import { StyledSection, StyledList, StyledItemList } from './Contacts.styled';
// import { deleteContact } from "store/sliceReducer";
// import { initial, filtered } from "store/selectors";

function Contacts(){
  // const initialContacts = useSelector(initial);
  // const filteredContacts = useSelector(filtered);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsState)

  // const onDeleteContact = (id) => dispatch(deleteContact(id));

  useEffect(()=>{
    dispatch(getContactsThunk())
  }, [dispatch])

  return (
    <StyledSection>
      <h2>Contacts</h2>
      <StyledList> 
      {contacts.length !== 0 && contacts.map((item)=>{
        return <StyledItemList key={item.id}>
          <span>{item.name}: </span>
          <a href={`tel:+38${item.number}`}>{item.number}</a>
          <button 
            type="button"
            // onClick={()=>onDeleteContact(item.id)}
            > delete
          </button>
        </StyledItemList>
      })}
    </StyledList>
    </StyledSection>
  )
}

export default Contacts;