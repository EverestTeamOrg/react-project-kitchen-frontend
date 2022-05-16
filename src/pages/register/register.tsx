import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { signupThunk } from "../../services/thunks";
import * as Styles from "../../components/StyledComponents/authStyles";
import * as FormStyles from "../../UI/forms/form";
import Preloader from "../../components/Preloader";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import SubmitButton from "../../components/submitButton";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.common);
  const [errorsResponse, setErrorsResponse] = useState<any>({});
  const [isError, setIsError] = useState(false);
  const { inProgress } = useAppSelector((state) => state.auth);


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
        setErrorsResponse(error);
      });
  });

  useEffect(() => {
    setIsError(isValid)
  }, [isValid])

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {inProgress && (<Preloader />)}

      <Styles.RegisterSection>
        <Styles.AuthTitle>Зарегистрироваться</Styles.AuthTitle>
        <Styles.StyledLink to="/login">Войти</Styles.StyledLink>

        <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
          <FormStyles.FieldSet>

            <FormStyles.Label>
              Имя пользователя
              <FormStyles.Input
                onInput={() => {
                  { "username" in errorsResponse && setErrorsResponse({ ...errorsResponse, username: "" }) }
                }}
                isError={errors.username || errorsResponse?.username}
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
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.username && <FormStyles.Error>{errors?.username?.message}</FormStyles.Error>}
              {errorsResponse?.username && <FormStyles.Error>{'Такое имя пользователя уже существует'}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <FormStyles.Label>
              Email
              <FormStyles.Input
                onInput={() => {
                  { "email" in errorsResponse && setErrorsResponse({ ...errorsResponse, email: "" }) }
                }}
                isError={errors.email || errorsResponse?.email}
                {...register("email", {
                  required: "Это поле обязательно к заполнению.",
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Пример Email: name@example.com",
                  },
                })}
              />
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.email && <FormStyles.Error>{errors?.email?.message}</FormStyles.Error>}
              {errorsResponse?.email && <FormStyles.Error>{'Такой email уже существует'}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <FormStyles.Label>
              Пароль
              <FormStyles.Input
                onInput={() => {
                  { "password" in errorsResponse && setErrorsResponse({ ...errorsResponse, password: "" }) }
                }}
                isError={errors.password || errorsResponse?.password}
                {...register("password", {
                  required: "Это поле обязательно к заполнению.",
                  minLength: {
                    value: 5,
                    message: "Пароль должен быть более 4 символов.",
                  },
                })}
              />
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.password && <FormStyles.Error>{errors?.password?.message}</FormStyles.Error>}
              {errorsResponse?.password && <FormStyles.Error>{errorsResponse?.password}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <SubmitButton btnText="Зарегистрироваться" disabled={!isError || inProgress} />

          </FormStyles.FieldSet>
        </FormStyles.Form>
      </Styles.RegisterSection>
    </>
  );
};

export default Register;
