import React from 'react';
import { NotFoundContainer, NotFoundTitle, NotFoundText, NavLink } from '../../components/StyledComponents/notFound404Styles';

const NotFound404 = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>
        Страница не найдена.<br />
        Чтобы читать блог, перейдите на <NavLink to='/'>Главную</NavLink>
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound404;
