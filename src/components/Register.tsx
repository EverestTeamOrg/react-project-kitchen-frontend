import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React, { useState } from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';
import { signup } from '../api';

const mapStateToProps = (state: any) => ({ ...state.auth });

const mapDispatchToProps = (dispatch: any) => ({
  onChangeEmail: (value: any) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value: any) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: (value: any) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username: string, email: string, password: string) => {
    // const payload = agent.Auth.register(username, email, password);
    const payload = signup(username, email, password);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

const Register: React.FC<any> =({onSubmit}, errors) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const submitForm = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    if (username && email && password) {
      onSubmit(username, email, password);
    }
  }

  return (
    <section className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">
                Have an account?
              </Link>
            </p>

            <ListErrors errors={errors} />

            <form action='POST' onSubmit={submitForm}>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={onChangeUsername} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword} />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign up
                </button>

              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
