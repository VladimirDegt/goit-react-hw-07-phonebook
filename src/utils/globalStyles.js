import { css } from '@emotion/css';
import { Global } from '@emotion/react';

const globalStyles = css`
  body {
    font-family: 'Roboto';
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
