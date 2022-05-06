import { Redirect } from "react-router-dom";
import ListErrors from "../../components/ListErrors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupLoginSubmitBtn from "../../components/SignupLoginSubmitBtn";
import { useForm } from "react-hook-form";
import { signupThunk } from "../../services/thunks";
import { authSlice } from "../../services/authSlice";
import * as Styles from "../../components/StyledComponents/authStyles";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.common);
  //Здесь нужно получить объект ошибок от сервера.
  const [errorsResponse, setErrorsResponse] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const actionsAuth = authSlice.actions;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const handleSubmitForm = handleSubmit(({ username, email, password }, e) => {
    e && e.preventDefault();
    dispatch(signupThunk({ username, email, password }))
      .unwrap()
      .catch((error: any) => {
        setErrorsResponse({ [error.name]: error.message });
      });
  });

  useEffect(() => {
    setIsError(isValid)
    return () => {
      dispatch(actionsAuth.pageWasUnloaded());
    }
  })

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Styles.AuthSection>
      <Styles.AuthTitle>Зарегистрироваться</Styles.AuthTitle>
      <Styles.StyledLink to="/login">Войти</Styles.StyledLink>

      <Styles.AuthForm action="POST" onSubmit={handleSubmitForm}>
        <Styles.AuthFieldSet>

          <Styles.AuthLabel>
            Имя пользователя
            <Styles.AuthInput
              isError={errors.username}
              {...register("username", {
                required: "Это поле обязательно к заполнению.",
                pattern: {
                  value: /[a-zA-Z0-9]$/,
                  message: "Имя пользователя может содержать буквы кириллицы и цифры.",
                },
                minLength: {
                  value: 2,
                  message: "Имя должно быть не менее двух букв.",
                },
              })}
            />
          </Styles.AuthLabel>
          <Styles.ErrorsContainer>
            {errors?.username && <Styles.AuthError>{errors?.username?.message}</Styles.AuthError>}
          </Styles.ErrorsContainer>

          <Styles.AuthLabel>
            Email
            <Styles.AuthInput
              isError={errors.email}
              {...register("email", {
                required: "Это поле обязательно к заполнению.",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Пример Email: name@example.com",
                },
              })}
            />
          </Styles.AuthLabel>
          <Styles.ErrorsContainer>
            {errors?.email && <Styles.AuthError>{errors?.email?.message}</Styles.AuthError>}
          </Styles.ErrorsContainer>

          <Styles.AuthLabel>
            Пароль
            <Styles.AuthInput
              isError={errors.password}
              {...register("password", {
                required: "Это поле обязательно к заполнению.",
                minLength: {
                  value: 5,
                  message: "Пароль должен быть более 4 символов.",
                },
              })}
            />
          </Styles.AuthLabel>
          <Styles.ErrorsContainer>
            {errors?.password && <Styles.AuthError>{errors?.password?.message}</Styles.AuthError>}
          </Styles.ErrorsContainer>

          <SignupLoginSubmitBtn btnText="Зарегистрироваться" disabled={!isError} />

        </Styles.AuthFieldSet>
      </Styles.AuthForm>

      {/* <ListErrors errors={errorsResponse} /> */}
    </Styles.AuthSection>
  );
};

export default Register;
