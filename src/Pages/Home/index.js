import * as S from './styles';
import { useSelector } from 'react-redux';
import ContactCard from '../../Components/ContactCard';
import HeaderHome from '../../Components/HeaderHome';
import { useState } from 'react';

const Home = () => {
  const contacts = useSelector((state) => state.datas.items);
  const term = useSelector((state) => state.filter.term);
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchActive = () => {
    if (term && term.trim() !== '') {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(term.toLowerCase())
    );
  });

  return (
    <>
      <HeaderHome setSearchActive={handleSearchActive} />
      <S.ListMainContainer>
        {contacts.length === 0 && !searchActive && <S.EmptyListTitle>Você não tem nenhum contato</S.EmptyListTitle>}
        {searchActive && filteredContacts.length === 0 && <S.EmptyListTitle>Não foi encontrado nenhum contato com esse nome</S.EmptyListTitle>}
        <ul>
          {searchActive
            ? filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                profilePhoto={contact.profilePhoto}
                notes={contact.notes}
              />
            ))
            : contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                profilePhoto={contact.profilePhoto}
                notes={contact.notes}
              />
            ))}
        </ul>
      </S.ListMainContainer>
    </>
  );
};

export default Home;
