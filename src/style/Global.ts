import { createGlobalStyle, keyframes } from 'styled-components'

const slide = keyframes`
   from { background-position: 0 0; }
    to { background-position: -1000px 0; }
`
const GlobalStyle = createGlobalStyle`
  * {
    
font-family: muli, sans-serif;




 }
  body {
     background: ${({ theme }) => theme.colors.background} url('/images/smb35-tile-5.png') repeat 0 0;
    animation: ${slide} 20s linear infinite;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
