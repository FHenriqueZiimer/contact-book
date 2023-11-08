import styled, { createGlobalStyle } from 'styled-components'

const StyleGlobal = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Gill Sans", sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  border-radius: 10px;
  background-color: lightgray;
  padding: 15px;
  display: flex;
  width: 500px;
  flex-direction: column;

`
export const Main = styled.main`

  background-color: black;
  padding: 30px;
  justify-content: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;

  @media (max-width: 426px) {
    padding: 0;
  }
`

export default StyleGlobal