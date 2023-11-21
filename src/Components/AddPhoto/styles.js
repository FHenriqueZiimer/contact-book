import styled from 'styled-components';

export const PhotoInput = styled.input`
  display: none;
`;

export const AddPhoto = styled.label`
  display: block;
  width: 180px;
  margin-top: 15px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  background-color: #484d50;
  cursor: pointer;
  color: white;
  text-align: center;
  padding: 5px;
`;

export const AddPhotoContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`