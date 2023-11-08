import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import ContactClass from '../../../Models';
import HeaderContact from '../../../Components/HeaderContact';
import generateUniqueId from '../../../Utils/newId';
import { create } from '../../../Store/Reducers/listContact';
import AddPhoto from '../../../Components/AddPhoto';

const validateEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const validatePhoneNumber = (phone) => /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/i.test(phone);

const NewContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrorName('');
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setErrorPhone('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorEmail('');
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSave = () => {
    let valid = true;

    if (!name.trim()) {
      setErrorName('Insira um nome');
      valid = false;
    }

    if (!validatePhoneNumber(phone)) {
      setErrorPhone('Informe um número de telefone válido');
      valid = false;
    }

    if (email.trim() && !validateEmail(email)) {
      setErrorEmail('Informe um e-mail válido');
      valid = false;
    }

    if (valid) {
      const id = generateUniqueId();
      const newContact = new ContactClass(id, name, email, phone, profilePhoto, notes);
      dispatch(create(newContact));
      navigate('/');
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPhoto = event.target.result;
        setProfilePhoto(newPhoto);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <HeaderContact>
        <S.HeaderButton onClick={() => navigate('/')}>Voltar</S.HeaderButton>
        <S.Title>Novo Contato</S.Title>
        <S.HeaderButton onClick={handleSave}>Salvar</S.HeaderButton>
      </HeaderContact>
      <S.Container>
        <AddPhoto handlePhotoChange={handlePhotoChange} profilePhoto={profilePhoto} />
        <S.InputContainer>
          <S.Input
            id="name"
            onChange={handleNameChange}
            style={{ borderColor: errorName ? 'red' : 'transparent' }}
            placeholder='Nome'
          />
          <S.ErrosSpan>{errorName}</S.ErrosSpan>

          <S.MaskInput
            id="phone"
            mask="(99) 99999-9999"
            onChange={handlePhoneChange}
            style={{ borderColor: errorPhone ? 'red' : 'transparent' }}
            placeholder='Telefone'
          />
          <S.ErrosSpan>{errorPhone}</S.ErrosSpan>

          <S.Input
            id="email"
            onChange={handleEmailChange}
            style={{ borderColor: errorEmail ? 'red' : 'transparent' }}
            placeholder='E-mail'
          />
          <S.ErrosSpan>{errorEmail}</S.ErrosSpan>

          <S.Label htmlFor="notes">Notas</S.Label>
          <S.StyledTextArea
            id="notes"
            name="notes"
            rows="5"
            cols="33"
            onChange={handleNotesChange}
          />
        </S.InputContainer>
      </S.Container>
    </>
  );
};

export default NewContact;
