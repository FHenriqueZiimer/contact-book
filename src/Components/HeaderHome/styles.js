import { styled } from 'styled-components';

export const HeaderTitle = styled.div `

display: flex;
padding: 10px;
justify-content: space-between;
align-items: center;
`

export const Header = styled.header `
display: flex;
height: 130px;
flex-direction: column;
justify-content: space-between;
width: 100%;
`

export const Titulo = styled.h1`
  font-size: 30px;
  font-weight: bold;
`

export const SearchContainer = styled.div`
  height: 45px;
  display: flex;
`

export const Input = styled.input`

  display: flow-root;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  border: none;
  background-color: #484d50;
  box-sizing: border-box;
  padding: 10px;

  &::placeholder {    
    color: white;
  }
`

export const SearchIconContainer = styled.button`
  margin-right: 8px;
  padding: 5px;
  color: #9dc180;
  font-weight: bold;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`