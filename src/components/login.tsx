import {Link} from 'react-router-dom';
import ListErrors from './ListErrors';
import React, {FunctionComponent, useEffect} from 'react';
import agent from '../agent';
import {TypedUseSelectorHook, useDispatch, useSelector as selectorHook} from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';
import rootReducer from "../reducer.js";
import {store} from "../store";

// TODO: типизацию useSelector перенести в общий файл
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// errors - см тип внутри ListErrors

const Login: FunctionComponent = () => {
  const {auth} = useSelector(state => {
    return state;
  })



  const dispatch = useAppDispatch();

  // TODO: это auth.actions?
  const onChangeEmail = (value: string) => {
    dispatch({type: UPDATE_FIELD_AUTH, key: 'email', value})
  }
  const onChangePassword = (value: string) => {
    dispatch({type: UPDATE_FIELD_AUTH, key: 'password', value})
  }
  const onSubmit = (email: string, password: string) => {
    dispatch({type: LOGIN, payload: agent.Auth.login(email, password)})
  }
  const onUnload = () => {
    dispatch({type: LOGIN_PAGE_UNLOADED})
  }

  useEffect(() => {
    onUnload();
  }, [])

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => onChangeEmail(event.target.value);
  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => onChangePassword(event.target.value);
  const submitForm = (email: string, password: string) => {
    onSubmit(email, password);
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">
                Need an account?
              </Link>
            </p>

            <ListErrors errors={auth.errors}/>

            <form onSubmit={(event) => {
              event.preventDefault();
              submitForm(auth.email, auth.password)
            }}>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={(event) => changeEmail(event)}/>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={auth.password}
                    onChange={(event) => changePassword(event)}/>
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                   disabled={auth.inProgress}>
                  Sign in
                </button>

              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
