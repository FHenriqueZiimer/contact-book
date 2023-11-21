import styled from 'styled-components';

export const DetailsHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 600px;

  @media (max-height: 668px) {
    height: 600px;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 420px;
`

export const ContactInfoWrapper = styled.div`
  overflow-y: auto;
  height: 140px;
  height: ${props => props.height || 'auto'};
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  display: flex;
  width: 100%;
  background-color: white;
`;

export const ProfilePhotoWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 250px;

  @media (max-height: 668px) {
    height: 210px;
  }
  
`

export const InputEditing = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  margin-top: 5px;
  outline: none;
`

export const TexAreaEditing = styled.textarea`
  margin-top: 5px;
  width: 100%;
  height: 150px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  outline: none;
  resize: none;
`

export const ContactInfo = styled.p`
  margin-top: 5px;
  font-size: 17px;
  color: #555;
`;

export const ContactImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
