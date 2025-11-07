import { styled } from 'styled-components'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 40px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
  }
`

export const Description = styled.p`
  max-width: 539px;
  font-weight: 900;
  font-size: 36px;
`
