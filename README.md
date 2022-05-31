# Когда вырасту

## Обзор
Данное приложение представляет из себя блог со следующей функциональностью:

 * Аутентификация и регистрация пользователя, изменение данных пользователя, а также выход из учетной записи.
 * Создание и публикация статьи с возможностью добавления тегов, редактирование статьи, а также ее удаление.
 * Возможность добавлять комментарии к статьям и удалять их, а также возможность лайкать статьи.
 * Есть сайдбар-меню с отображением популярных и свежих статей.
 * Возможность подписаться на автора статьи или отписаться от него.

>Данный проект реализован в рамках обучения на курсе "Web+" во время спринта "Второй проектный месяц", апрель - май 2022

[Макет в figma](https://www.figma.com/file/4wPCpzg3Ee8yxsDlq5FVUs/%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B2%D1%8B%D1%80%D0%B0%D1%81%D1%82%D1%83_external_link?node-id=0%3A1).

## Используемые технологии
* React
* TypeScript
* Redux Toolkit
* Axios
* Styled Components
* React-Hook-Form
* React-Responsive-Carousel
* Адаптивная и кроссбраузерная верстка

## Разработчики
* [Роман Исмагилов](https://github.com/Roman178).
* [Ян Самойлов](https://github.com/YanSamoilov).
* [Дарья Русанова](https://github.com/dariarus).
* [Иван Сергеев](https://github.com/Wailingray).
* [Иван Кудряшов](https://github.com/ivankudriashov).
* [Глен Зангеев](https://github.com/eilerglen).
* [Артем Жиглов](https://github.com/zhig1ov).


## Выполненные задачи
* Выполнен рефакторинг исходного кода с классовых компонентов на хуки
* Выполнен рефакторинг кода с JavaScript на TypeScript
* Выполнен рефакторинг стейт-менеджмента c Redux на Redux-toolkit
* Полностью переписаны стили на новый дизайн макета с применением библиотеки StyledComponents
* Полностью изменено взаимодействие с бэкендом с применением библиотеки Axios

## Установка

* Создайте локальную директорию для проекта
`mkdir blogPracticum`
* Перейдите в созданную директорию
`cd blogPracticum`
* Клонируйте репозиторий фронта в созданную директорию
`git clone https://github.com/EverestTeamOrg/react-project-kitchen-frontend.git`
* Клонируйте репозиторий бэкенда в созданную директорию
`git clone https://github.com/EverestTeamOrg/react-project-kitchen-backend.git`

    Бэкенд для локального запуска проекта можно найти здесь:
    [репозиторий бэкенда на Express](https://github.com/gothinkster/node-express-realworld-example-app) и на [Контейнер в Docker](https://github.com/Yandex-Practicum/react-project-kitchen-backend).

* Необходимо установить Docker и, перейдя в репозиторий бэкенда, выполнить команду `make run`в терминале
* Перейти в репозиторий фронтенда и выполнить команду `npm install && npm start` в терминале



