import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CreateContactBtn from '../CreateContactBtn';
import { searchTerm } from '../../Store/Reducers/filter';
import * as S from './styles';

const HeaderComponent = ({ setSearchActive }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    const searchTermValue = e.target.value;
    setSearch(searchTermValue);
    handleSearch(searchTermValue);
  }

  const handleSearch = (searchTermValue) => {
    dispatch(searchTerm(searchTermValue));
    setSearchActive(true);
  }

  return (
    <>
      <S.Header>
        <S.HeaderTitle>
          <S.Titulo>Contatos</S.Titulo>
          <CreateContactBtn />
        </S.HeaderTitle>
        <S.SearchContainer>
          <S.Input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={handleInputChange}
          />
        </S.SearchContainer>
      </S.Header>
    </>
  )
}

export default HeaderComponent;
