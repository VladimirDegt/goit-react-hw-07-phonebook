import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'store/operations';
import { contactsState, filterState } from 'store/selectors';
import { StyledSection, StyledList, StyledItemList } from './Contacts.styled';

function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(contactsState);
  const filteredList = useSelector(filterState);

  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledSection>
      <h2>Contacts</h2>
      {isLoading && <p>Loading contacts...</p>}
      {error && (
        <p>Упс, что-то пошло не так. Попробуйте перезагрузить страницу</p>
      )}
      <StyledList>
        {items.length !== 0 &&
          filteredList === '' &&
          items.map(item => {
            return (
              <StyledItemList key={item.id}>
                <span>{item.name}: </span>
                <a href={`tel:+38${item.number}`}>{item.number}</a>
                <button type="button" onClick={() => onDeleteContact(item.id)}>
                  {' '}
                  delete
                </button>
              </StyledItemList>
            );
          })}
      </StyledList>

      <StyledList>
        {filteredList.length > 0 &&
          filteredList.map(item => {
            return (
              <StyledItemList key={item.id}>
                <span>{item.name}: </span>
                <a href={`tel:+38${item.number}`}>{item.number}</a>
                <button type="button" onClick={() => onDeleteContact(item.id)}>
                  {' '}
                  delete
                </button>
              </StyledItemList>
            );
          })}
      </StyledList>
    </StyledSection>
  );
}

export default Contacts;
