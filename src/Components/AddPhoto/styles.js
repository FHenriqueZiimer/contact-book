import styled from 'styled-components';

export const PhotoInput = styled.input`
  display: none;
`;

export const AddPhoto = styled.label`
  display: block;
  width: 180px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  height: 35px;
  background-color: #484d50;
  cursor: pointer;
  color: white;
  text-align: center;
  padding: 10px;
`;

export const AddPhotoContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;

  @media (max-width: 426px) {
    height: 220px;
  }
`