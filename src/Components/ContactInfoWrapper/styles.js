import styled from 'styled-components';

export const ContactInfoWrapper = styled.div`
  overflow-y: auto;
  height: ${props => props.height || 'auto'};
  padding: 11px;
  flex-direction: column;
  border-radius: 10px;
  display: flex;
  width: 100%;
  background-color: white;
`;