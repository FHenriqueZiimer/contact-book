import { styled } from 'styled-components'

export const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 12px; 
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`

export const Contact = styled.div`
  flex-grow: 1;
  padding: 8px; 
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

