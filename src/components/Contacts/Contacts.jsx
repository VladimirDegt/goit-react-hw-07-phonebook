import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'store/operations';
import { contactsState, filterState } from 'store/selectors';
import {
  StyledSection,
  StyledContainerTable,
  StyledFirstRowHead,
  StyledSecondRowHead,
  StyledThirdRowHead,
  StyledFirstRow,
  StyledSecondRow,
  StyledThirdRow,
  StyledChangeBtn,
} from './Contacts.styled';
import IconDelete from 'utils/delete-svg';

function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(contactsState);
  const { filter } = useSelector(filterState);

  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledSection>
      {isLoading && <p>Loading contacts...</p>}
      {error && (
        <p>Упс, что-то пошло не так. Попробуйте перезагрузить страницу</p>
      )}
      <StyledContainerTable>
        <thead>
          <tr>
            <StyledFirstRowHead>Name</StyledFirstRowHead>
            <StyledSecondRowHead>Phone</StyledSecondRowHead>
            <StyledThirdRowHead>Date</StyledThirdRowHead>
          </tr>
        </thead>
        <tbody>
          {items.length !== 0 &&
            filter === '' &&
            items.map(item => (
              <tr key={item.id}>
                <StyledFirstRow>{item.name}</StyledFirstRow>
                <StyledSecondRow>{item.number}</StyledSecondRow>
                <StyledThirdRow>{item.createdAt}</StyledThirdRow>
                <td>
                  <StyledChangeBtn
                    type="button"
                    onClick={() => onDeleteContact(item.id)}
                  >
                    <IconDelete />
                  </StyledChangeBtn>
                </td>
              </tr>
            ))}

          {filter.length > 0 &&
            filter.map(item => (
              <tr key={item.id}>
                <StyledFirstRow>{item.name}</StyledFirstRow>
                <StyledSecondRow>{item.number}</StyledSecondRow>
                <StyledThirdRow>{item.createdAt}</StyledThirdRow>
                <td>
                  <StyledChangeBtn
                    type="button"
                    onClick={() => onDeleteContact(item.id)}
                  >
                    <IconDelete />
                  </StyledChangeBtn>
                </td>
              </tr>
            ))}    
        </tbody>
      </StyledContainerTable>
    </StyledSection>
  );
}

export default Contacts;
