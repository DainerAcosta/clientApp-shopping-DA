import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === 'ar' || lang === 'he') &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0;
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  }

  h1,h2,h3,h4,h5,h6  {
    font-family: ${themeGet('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`