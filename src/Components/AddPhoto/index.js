import React from "react";
import * as S from './styles';
import ContactPhoto from '../ContactPhoto';

const AddPhoto = ({ handlePhotoChange, profilePhoto }) => {
  return (
    <S.AddPhotoContainer>
      <ContactPhoto img={profilePhoto} />
      <S.AddPhoto>
        {profilePhoto ? 'Alterar Foto' : 'Adicionar Foto'}
        <S.PhotoInput
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </S.AddPhoto>
    </S.AddPhotoContainer>
  )
}

export default AddPhoto;
