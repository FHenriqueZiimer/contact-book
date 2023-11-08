import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import ContactPhoto from '../ContactPhoto';


const ContactCard = ({ id, name, profilePhoto, phone, email, notes }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('details', { state: { id, name, profilePhoto, phone, email, notes } });
  }

  return (
    <li onClick={handleClick} key={id}>
      <S.ContactInfo>
        <S.InfoContainer>
          <S.Contact>{name}</S.Contact>
          <ContactPhoto noBorder width='65px' height='65px' img={profilePhoto}></ContactPhoto>
        </S.InfoContainer>
      </S.ContactInfo>
    </li>
  )
}

export default ContactCard
