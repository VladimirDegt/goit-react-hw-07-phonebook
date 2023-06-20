import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsThunk, getContactsThunk } from "store/operations";
import { contactsState } from "store/selectors";
import { StyledSection, StyledList, StyledItemList } from './Contacts.styled';

function Contacts(){
  const dispatch = useDispatch();
  const {items, isLoading, error} = useSelector(contactsState);

  const onDeleteContact = (id) => dispatch(deleteContactsThunk(id));

  useEffect(()=>{
    dispatch(getContactsThunk())
  }, [dispatch])

  return (
    <StyledSection>
      <h2>Contacts</h2>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Упс, что-то пошло не так. Попробуйте перезагрузить страницу</p>}
      <StyledList> 
      {items.length !== 0 && items.map((item)=>{
        return <StyledItemList key={item.id}>
          <span>{item.name}: </span>
          <a href={`tel:+38${item.number}`}>{item.number}</a>
          <button 
            type="button"
            onClick={()=>onDeleteContact(item.id)}
            > delete
          </button>
        </StyledItemList>
      })}
    </StyledList>
    </StyledSection>
  )
}

export default Contacts;