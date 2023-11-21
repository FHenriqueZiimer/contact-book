import styled from 'styled-components';

export const ContactPhoto = styled.img`
  width: ${props => props.width || '30%'};
  height: ${props => props.height || '18vh'};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  @media (max-height: 700px) {
    width: ${props => props.width || '18vh'};
    height: ${props => props.height || '18vh'};
  }
`