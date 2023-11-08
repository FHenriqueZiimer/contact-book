import React from 'react';
import * as S from './styles';

const ContactPhoto = ({ img, height, width }) => {
  const defaultImg = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png';

  return (
    <S.ContactPhoto
      height={height}
      width={width}
      src={img || defaultImg}
      alt="Contact Photo"
    />
  );
};

export default ContactPhoto;
