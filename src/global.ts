import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  background: '#FFF8F2',
  beige: '#FFEBD9',
  primary: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background: ${colors.background};
    color: ${colors.primary};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .container-fh {
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 40px 0px;
  }
  `

export const CardContainer = styled.div`
  position: relative;
`
