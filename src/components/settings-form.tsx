import { useEffect, useState, FC } from "react";
import { getProfileThunk, updateUserThunk } from "../services/thunks";
import { useForm } from "react-hook-form";
import SubmitButton from "./submitButton";
import IconInput from "../UI/icon-input/icon-input";
import IconInputFile from "../UI/icon-input-file/icon-input-file";
import * as FormStyles from "../UI/forms/form";
import Preloader from "./Preloader";
import { useAppDispatch, useAppSelector } from "../services/hooks";

interface ISettingsForm {
  setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void;
}

type FormData = {
  image: string;
  username: string;
  email: string;
  password: string;
};

const SettingsForm: FC<ISettingsForm> = () => {
  const { currentUser } = useAppSelector((state) => state.common)
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const [errorsResponse, setErrorsResponse] = useState<any>({});
  const [visible, setVisible] = useState(false);
  const { inProgress } = useAppSelector((state) => state.settings);
  const { image } = useAppSelector((state) => state.profile);

  const { register, setValue, formState: { errors, isValid }, handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      image: image,
      email: currentUser.email,
      password: "",
      username: currentUser.username,
    },
  });

  const handleSubmitForm = handleSubmit(({ image, username, email, password }, e) => {
    e && e.preventDefault();
    if (password === "") {
      dispatch(updateUserThunk({ image, username, email }))
        .unwrap()
        .catch((error: any) => {
          setErrorsResponse(error);
        });
    }
    else {
      dispatch(updateUserThunk({ image, username, email, password }))
        .unwrap()
        .catch((error: any) => {
          setErrorsResponse(error);
        });
    }
  });

  useEffect(() => {
    setIsError(isValid)
  }, [isValid])

  useEffect(() => {
    dispatch(getProfileThunk(currentUser.username));
    setValue('username', currentUser.username);
    setValue('email', currentUser.email);
    setValue('image', image);
  }, [currentUser.username, currentUser.email, dispatch, image])

  const onToggle = () => {
    setVisible((visible) => !visible);
  };

  return (
    <>
      {inProgress && (
        <Preloader />
      )}

      <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
        <FormStyles.FieldSet>

          <FormStyles.Label>
            URL изображения профиля
            <FormStyles.InputContainer>
              <FormStyles.Input
                isError={errors.image}
                {...register("image", {
                  pattern: {
                    value: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
                    message: "Введите корректный url.",
                  },
                })}
              />
              <FormStyles.Icon>
                <IconInputFile />
              </FormStyles.Icon>
            </FormStyles.InputContainer>
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.image && <FormStyles.Error>{errors?.image?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            Имя пользователя
            <FormStyles.Input
              onInput={() => {
                { "username" in errorsResponse && setErrorsResponse({ ...errorsResponse, username: "" }) }
              }}
              isError={errors.username}
              {...register("username", {
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
            E-mail
            <FormStyles.Input
              onInput={() => {
                { "email" in errorsResponse && setErrorsResponse({ ...errorsResponse, email: "" }) }
              }}
              isError={errors.email}
              {...register("email", {
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Пример email: name@example.com",
                },
              })}
            />
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.email && <FormStyles.Error>{errors?.email?.message}</FormStyles.Error>}
            {errorsResponse?.email && <FormStyles.Error>{'Такой email уже существует'}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <FormStyles.Label>
            Новый пароль
            <FormStyles.InputContainer>
              <FormStyles.Input
                autoComplete="new-password"
                type={visible ? "text" : "password"}
                isError={errors.password}
                {...register("password", {
                  pattern: {
                    value: /[a-zA-Z0-9]$/,
                    message: "Пароль может содержать только буквы латинского алфавита и цифры.",
                  },
                  minLength: {
                    value: 5,
                    message: "Пароль должен быть более 4 символов.",
                  },
                })}
              />
              <FormStyles.Icon>
                <IconInput visible={visible} toggle={onToggle} />
              </FormStyles.Icon>
            </FormStyles.InputContainer>
          </FormStyles.Label>
          <FormStyles.ErrorsContainer>
            {errors?.password && <FormStyles.Error>{errors?.password?.message}</FormStyles.Error>}
          </FormStyles.ErrorsContainer>

          <SubmitButton btnText="Обновить настройки" disabled={!isError || inProgress} />

        </FormStyles.FieldSet>

      </FormStyles.Form>
    </>
  );
};

export default SettingsForm;
