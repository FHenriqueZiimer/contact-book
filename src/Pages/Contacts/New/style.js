import { styled } from 'styled-components';
import InputMask from 'react-input-mask'

export const Header = styled.header`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.h3`
  @media (max-width: 412px) {
    font-size: 15px;
  }
`;

export const Label = styled.label`
`

export const Container = styled.div`
  align-items: center;
  justify-content: space-around;
  padding: 0px  10px;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

export const ProfilePhoto = styled.img`
  width: 180px;
  height: 180px;
  border: 2px solid #ccc; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
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

export const PhotoInput = styled.input`
  display: none;
`;

export const MaskInput = styled(InputMask)`
  font-size: 17px;
  border-radius: 10px;
  padding: 15px;
  height: 50px;
  width: 100%;
`

export const HeaderButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: #007aff;
  font-size: 18px;

  @media (max-width: 412px) {
    font-size: 15px;
  }
`;

export const AddPhotoContainer = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;

  @media (max-width: 426px) {
    height: 200px;
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;
  resize: none;
  height: 100px;
  outline: none;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const InputContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 360px;

  @media (max-height: 667px) {
    height: 330px;
  }
`

export const ErrosSpan = styled.span`
  font-size: 15px;
  align-self: flex-start;
  height: 20px;
`

export const Input = styled.input`
  font-size: 17px;
  border-radius: 10px;
  padding: 15px;
  height: 50px;
  width: 100%;
`;

export const Message = styled.p`
  
`;
