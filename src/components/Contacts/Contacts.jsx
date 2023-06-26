import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'store/operations';
import { selectContactsState, selectFilterState } from 'store/selectors';
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
import IconDeleteBin5Fill from 'utils/delete-icon';

function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContactsState);
  const { filter } = useSelector(selectFilterState);
  const onDeleteContact = id => dispatch(deleteContact(id));

  let visibaleContact;
  filter === ''
    ? (visibaleContact = items)
    : (visibaleContact = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledSection>
      {isLoading && <p>Loading contacts...</p>}
      {error && (
        <p>Упс, щось пішло не так. Спробуйте перезавантажити сторінку</p>
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
          {visibaleContact.map(item => (
            <tr key={item.id}>
              <StyledFirstRow>{item.name}</StyledFirstRow>
              <StyledSecondRow>{item.number}</StyledSecondRow>
              <StyledThirdRow>{item.createdAt}</StyledThirdRow>
              <td>
                <StyledChangeBtn
                  type="button"
                  onClick={() => onDeleteContact(item.id)}
                >
                  <IconDeleteBin5Fill />
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
