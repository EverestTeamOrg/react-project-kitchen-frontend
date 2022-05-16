import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../services/hooks";

export const NavigationView: FunctionComponent<{
  currentUser: { username: string };
}> = (props) => {
  // TODO: все Link сделать NavLink и оформить стили для нажатой ссылки
  // TODO: проверить библиотечные отступы (m-r-... - они в rem). При необх-ти перенести их в стили

  const isLoggedIn = useAppSelector((state) => state.common.isLoggedIn);

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="m-r-1 nav-link">
          Home
        </Link>
      </li>

      {isLoggedIn ? (
        <>
          <li className="nav-item">
            <Link to="/editor" className="nav-link">
              {/*TODO: перенести тег i (курсивный текст) в стили*/}
              {/*TODO: перенести неразрывный пробел (&nbsp;) в стили в виде отступов*/}

              {/*<i className="m-r-2 ion-compose"></i>New Post*/}
              <p className="m-r-1 ion-compose">New Post</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              {/*<i className="m-r-2 ion-gear-a"></i>Settings*/}
              <p className="m-r-1 ion-gear-a">Settings</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/@${props.currentUser.username}`} className="nav-link">
              <p className="m-r-1">Hello, {props.currentUser.username}</p>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
