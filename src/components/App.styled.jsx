import styled from '@emotion/styled'
import { displayFlex } from 'utils/display-flex'

export const StyledContainer = styled.div`
    gap: 20px;
    text-align: center;
    ${displayFlex}

    h1, h2 {
      margin: 0;
    }
`