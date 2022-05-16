import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
// src/components/login.tsx
// import SignupLoginSubmitBtn from "./SignupLoginSubmitBtn";
import { loginThunk } from "../../services/thunks/index";
import { useForm } from "react-hook-form";
import * as Styles from "../../components/StyledComponents/authStyles";
import * as FormStyles from "../../UI/forms/form";
import Preloader from "../../components/Preloader";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import SubmitButton from "../../components/submitButton";


type FormData = {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state: any) => state.common);
  const [errorsResponse, setErrorsResponse] = useState<any>({});
  const [isError, setIsError] = useState(false);
  const { inProgress } = useAppSelector((state: any) => state.auth);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const handleSubmitForm = handleSubmit(({ email, password }, e) => {
    e && e.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .catch((error: any) => {
        setErrorsResponse(error);
      });
  });

  useEffect(() => {
    setIsError(isValid)
  })

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {inProgress && (<Preloader />)}

      <Styles.LoginSection>
        <Styles.AuthTitle>Войти</Styles.AuthTitle>
        <Styles.StyledLink to="/register">Зарегистрироваться</Styles.StyledLink>

        <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
          <FormStyles.FieldSet>

            <FormStyles.Label>
              Email
              <FormStyles.Input
                onInput={() => {
                  { "email or password" in errorsResponse && setErrorsResponse({ ...errorsResponse, "email or password": "" }) }
                }}
                isError={errors.email || errorsResponse['email or password']}
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
              {errorsResponse['email or password'] && <FormStyles.Error>{'Неверный email или пароль'}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <FormStyles.Label>
              Пароль
              <FormStyles.Input
                onInput={() => {
                  { "email or password" in errorsResponse && setErrorsResponse({ ...errorsResponse, "email or password": "" }) }
                }}
                isError={errors.password || errorsResponse['email or password']}
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
              {errorsResponse['email or password'] && <FormStyles.Error>{'Неверный email или пароль'}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <SubmitButton btnText="Войти" disabled={!isError || inProgress} />

          </FormStyles.FieldSet>
        </FormStyles.Form>
      </Styles.LoginSection>
    </>
  );
};

export default Login;
