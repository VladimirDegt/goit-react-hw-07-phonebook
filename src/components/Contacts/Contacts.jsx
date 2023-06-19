import { useDispatch, useSelector } from "react-redux";
import { StyledSection, StyledList, StyledItemList } from './Contacts.styled';
import { deleteContact } from "store/sliceReducer";
import { initial, filtered } from "store/selectors";

function Contacts(){
  const initialContacts = useSelector(initial);
  const filteredContacts = useSelector(filtered);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <StyledSection>
      <h2>Contacts</h2>
      <StyledList> 
      {filteredContacts === '' && initialContacts.map((item)=>{
        return <StyledItemList key={item.id}>
          <span>{item.name}: </span>
          <a href={`tel:+38${item.number}`}>{item.number}</a>
          <span>{' Viber'}: </span>
          <a href={`viber://chat?number=+38${item.number}`}>{item.number}</a>
          <button 
            type="button"
            onClick={()=>onDeleteContact(item.id)}
            > delete
          </button>
        </StyledItemList>
      })}

      {(filteredContacts.length !== 0) && filteredContacts.map((item)=>{
        return <StyledItemList key={item.id}>
          <span>{item.name}: </span>
          <a href={`tel:+38${item.number}`}>{item.number}</a>
          <span>{' Viber'}: </span>
          <a href={`viber://chat?number=+38${item.number}`}>{item.number}</a>
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