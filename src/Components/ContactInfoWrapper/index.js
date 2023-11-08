import React from 'react';
import * as S from './styles';

const ContactInfoWrapper = ({ label, children, height }) => (
  <S.ContactInfoWrapper height={height}>
    <p>{label}</p>
    {children}
  </S.ContactInfoWrapper>
);

export default ContactInfoWrapper;