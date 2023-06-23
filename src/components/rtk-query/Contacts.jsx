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
import { useGetContactsQuery } from 'rtk-query/api-RTKQuery';
import IconDeleteBin5Fill from 'utils/delete-icon';

function Contacts() {
  const { data, error, isLoading } = useGetContactsQuery()
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
          {data && data.map(item => (
            <tr key={item.id}>
              <StyledFirstRow>{item.name}</StyledFirstRow>
              <StyledSecondRow>{item.number}</StyledSecondRow>
              <StyledThirdRow>{item.createdAt}</StyledThirdRow>
              <td>
                <StyledChangeBtn
                  type="button"
                  // onClick={() => onDeleteContact(item.id)}
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
