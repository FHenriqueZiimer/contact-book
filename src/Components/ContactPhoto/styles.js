import styled from 'styled-components';

export const ContactPhoto = styled.img`
  width: ${props => props.width || '180px'};
  height: ${props => props.height || '180px'};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  @media (max-width: 426px) {
    width: ${props => props.width || '140px'};
    height: ${props => props.height || '140px'};
  }
`