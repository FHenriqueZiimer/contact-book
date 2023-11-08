import React, { useState } from 'react';
import * as S from './styles';
import ContactInfoWrapper from '../../../Components/ContactInfoWrapper';
import HeaderContact from '../../../Components/HeaderContact';
import ContactPhoto from '../../../Components/ContactPhoto';
import { HeaderButton } from '../New/style';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { remove, update } from '../../../Store/Reducers/listContact';
import AddPhoto from '../../../Components/AddPhoto';

const InputField = ({ label, value, onChange, editing }) => {
  return (
    <ContactInfoWrapper label={label}>
      {editing ? (
        <S.InputEditing
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <S.ContactInfo>{value}</S.ContactInfo>
      )}
    </ContactInfoWrapper>
  );
};

const TextAreaField = ({ label, value, onChange, editing }) => {
  return (
    <ContactInfoWrapper label={label} height="120px">
      {editing ? (
        <S.TexAreaEditing
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <S.ContactInfo>{value}</S.ContactInfo>
      )}
    </ContactInfoWrapper>
  );
};

const ContactDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const contacts = useSelector(state => state.datas.items);
  const contact = contacts.find(item => item.id === id);
  const [editing, setEditing] = useState(false);
  const [editedValues, setEditedValues] = useState(contact);

  const handleInputChange = (field, value) => {
    setEditedValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPhoto = event.target.result;
        handleInputChange('profilePhoto', newPhoto)
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackBtn = () => {
    if (editing) {
      setEditing(false);
      setEditedValues(contact);
    } else {
      navigate('/');
    }
  }

  const handleContactDelete = () => {
    dispatch(remove(id));
    navigate('/');
  }

  const handleContactEdit = () => {
    setEditing(true);
  }

  const handleSaveChanges = () => {
    dispatch(update(editedValues));
    setEditing(false);
  };

  return (
    <>
      <HeaderContact>
        <HeaderButton onClick={handleBackBtn}>{editing ? "Cancelar" : "Voltar"}</HeaderButton>
        <HeaderButton onClick={editing ? handleSaveChanges : handleContactEdit}>
          {editing ? "Salvar" : "Editar"}
        </HeaderButton>
      </HeaderContact>

      <S.DetailsWrapper>
        {editing ? <AddPhoto handlePhotoChange={handlePhotoChange} profilePhoto={editedValues.profilePhoto} /> : <ContactPhoto img={editedValues.profilePhoto} />}

        <S.ContactInfoContainer>
          <InputField label="Nome" value={editedValues.name} onChange={value => handleInputChange('name', value)} editing={editing} />
          <InputField label="Celular" value={editedValues.phone} onChange={value => handleInputChange('phone', value)} editing={editing} />
          <InputField label="E-mail" value={editedValues.email} onChange={value => handleInputChange('email', value)} editing={editing} />
          <TextAreaField label="Notas" value={editedValues.notes} onChange={value => handleInputChange('notes', value)} editing={editing} />

          <ContactInfoWrapper>
            <HeaderButton onClick={handleContactDelete}>Apagar Contato</HeaderButton>
          </ContactInfoWrapper>
        </S.ContactInfoContainer>
      </S.DetailsWrapper>
    </>
  )
}

export default ContactDetails;
