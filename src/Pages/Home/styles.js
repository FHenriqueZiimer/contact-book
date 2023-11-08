import { styled } from 'styled-components';
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsCheckSquareFill,
  BsFillXSquareFill
} from 'react-icons/bs';

const greenColor = '#008000';
const redColor = '#FF0000';

export const ListMainContainer = styled.main`
  position: relative;
  width: 100%;
  padding: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const EmptyListTitle = styled.h3`
  text-align: center;
`

export const ContactInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #9dc180;
  border-radius: 15px;
`;

export const Contact = styled.div`
  font-weight: normal;
  margin: 0 auto;
  flex-grow: 1;
  padding: 12px;
`;

export const InfoContainer = styled.div`
  display: grid;
  align-items: center;
`;

const IconStyles = `
  margin: auto;
  padding: 5px;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
`;

export const EditContainer = styled.div`
  display: grid;
  background-color: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const EditIcon = styled(BsFillPencilFill)`
  ${IconStyles}
  color: ${greenColor};

  &:hover {
    transform: scale(1.1);
  }
`;

export const SaveIcon = styled(BsCheckSquareFill)`
  ${IconStyles}
  color: ${greenColor};

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteIcon = styled(BsFillTrashFill)`
  ${IconStyles}
  color: ${redColor};

  &:hover {
    transform: scale(1.1);
  }
`;

export const CancelIcon = styled(BsFillXSquareFill)`
  ${IconStyles}
  color: ${redColor};

  &:hover {
    transform: scale(1.1);
  }
`;
