import styled from '@emotion/styled';
import { displayFlex } from 'utils/display-flex';

export const StyledSection = styled.section`
  ${displayFlex}
  gap: 5px;
`;

export const StyledContainerTable = styled.table`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 10px auto;
  border-collapse: collapse;

  thead th {
    text-align: center;
  }

  th,
  td {
    border: 1px solid #2e2f42;
    padding: 8px;
  }
`;

export const StyledFirstRowHead = styled.th`
  width: 300px;
`;
export const StyledSecondRowHead = styled.th`
  width: 200px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const StyledThirdRowHead = styled.th`
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledFirstRow = styled.td`
  width: 300px;
  font-size: 16px;
  weight: 500;
  color: #0000ff;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #6699ff;
  }
`;
export const StyledSecondRow = styled.td`
  width: 200px;
  text-align: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const StyledThirdRow = styled.td`
  width: 200px;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledChangeBtn = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
