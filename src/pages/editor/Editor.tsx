import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  createArticleThunk,
  deleteArticleThunk,
  updateArticleThunk,
} from "../../services/thunks";
import { useForm } from "react-hook-form";
import * as Styles from "../../components/StyledComponents/editorStyles";
import * as FormStyles from "../../UI/forms/form";
import IconInputFile from "../../UI/icon-input-file/icon-input-file";
import SubmitButton from "../../components/submitButton";
import DeleteArticleBtn from "../../components/DeleteArticleBtn";

import Modal from "../../components/modal/modal";
import Preloader from "../../components/Preloader";

type FormData = {
  title: string;
  description: string;
  image: string;
  body: string;
  tagInput: string;
}

function Editor() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isError, setIsError] = useState(false);
  const { inProgress } = useSelector((state: any) => state.article);
  const params: { slug: string, id: string } = useParams();
  const { article } = useSelector((state: any) => state.article);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const onClose = (e: any) => {
    e.preventDefault();

    setIsModalOpen(false);
  }

  const deleteArticle = (e: any) => {
    e.preventDefault();
    dispatch(deleteArticleThunk(article.slug)).then(() => history.push("/"));
    setIsModalOpen(false);
  };

  const {
    register,
    getValues,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      image: "",
      body: "",
      tagInput: ""
    }
  });

  useEffect(() => {
    if (!params.slug) {
      setValue("title", "");
      setValue("description", "");
      setValue("body", "");
      setValue("tagInput", "");
    }
    else {
      setValue("title", article.title);
      setValue("description", article.description);
      setValue("body", article.body);
      setValue("tagInput", article.tagList);
    }
  }, [article, params])

  useEffect(() => {
    setIsError(isValid)
  })

  const handleSubmitForm = handleSubmit(({ title, description, image, body, tagInput }, e) => {
    e && e.preventDefault();
    if (params.hasOwnProperty('slug')) {
      updateArticle(title, description, image, body, tagInput);
    }
    else {
      createArticle(title, description, image, body, tagInput);
    }
  });

  const createArticle = (title: string, description: string, image: string, body: string, tagInput: string) => {

    dispatch(createArticleThunk({
      title, description, image, body,
      tagList: getValues('tagInput').split(','),
    })
    )
      .unwrap()
      .then((data: any) => {
        history.push(`/article/${data.article.slug}`);
      })
  }

  const updateArticle = (title: string, description: string, image: string, body: string, tagInput: string) => {
    const tags = getValues('tagInput');
    const tagsArray = typeof (tags) === 'string' ? tags.split(',') : tags;

    dispatch(updateArticleThunk({
      title, description, image, body,
      tagList: tagsArray,
      slug: params.slug,
    })
    )
      .unwrap()
      .then((data: any) => {
        history.push(`/article/${data.article.slug}`);
      })
  }

  return (
    <>
      {inProgress && (<Preloader />)}

      <Styles.EditorSection>
        <Styles.EditorTitle>{params.hasOwnProperty('slug') ? "Редактировать запись" : "Новая запись"}</Styles.EditorTitle>

        <FormStyles.Form action="POST" onSubmit={handleSubmitForm}>
          <FormStyles.FieldSet>

            <FormStyles.Label>
              Название статьи
              <FormStyles.Input
                isError={errors.title}
                {...register("title", {
                  required: "Это поле обязательно к заполнению.",
                })}
              />
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.title && <FormStyles.Error>{errors?.title?.message}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <FormStyles.Label>
              О чем статья
              <FormStyles.Input
                isError={errors.description}
                {...register("description", {
                  required: "Это поле обязательно к заполнению.",
                })}
              />
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.description && <FormStyles.Error>{errors?.description?.message}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <FormStyles.Label>
              URL изображения (опционально)
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
              Текст статьи
              <Styles.TextAreaContainer isError={errors.body}>
                <Styles.EditorTextarea
                  minRows={5.4}
                  {...register("body", {
                    required: "Это поле обязательно к заполнению.",
                  })}
                />
              </Styles.TextAreaContainer>
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.body && <FormStyles.Error>{errors?.body?.message}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <FormStyles.Label>
              Теги (через запятую)
              <FormStyles.Input
                isError={errors.tagInput}
                {...register("tagInput", {
                  minLength: {
                    value: 0,
                    message: ""
                  }
                })}
              />
            </FormStyles.Label>
            <FormStyles.ErrorsContainer>
              {errors?.tagInput && <FormStyles.Error>{errors?.tagInput?.message}</FormStyles.Error>}
            </FormStyles.ErrorsContainer>

            <SubmitButton
              btnText={params.hasOwnProperty('slug') ? "Сохранить  запись" : "Опубликовать запись"}
              disabled={!isError || inProgress}
            />


          </FormStyles.FieldSet>

        </FormStyles.Form >

        {params.slug && <DeleteArticleBtn onClick={openModal} mrgTop="24px" text="Удалить запись" align="flex-end" />}

      </Styles.EditorSection>

      {isModalOpen &&
        <Modal deleteArticle={deleteArticle} title={"Удалить запись"} onClose={onClose} />
      }

    </>
  )
}

export default Editor;
