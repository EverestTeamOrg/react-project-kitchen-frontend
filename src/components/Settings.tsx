import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT
} from '../constants/actionTypes';
import { SettingsForm } from './SettingsForm';



const mapStateToProps = (state: any) => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user: any) =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
});

interface TSettingsProps {

}

const Settings: React.FC<TSettingsProps> = (props: any) => {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">

            <h1 className="text-xs-center">Your Settings</h1>

            <ListErrors errors={props.errors}></ListErrors>

            <SettingsForm
              currentUser={props.currentUser}
              onSubmitForm={props.onSubmitForm} />

            <hr />

            <button
              className="btn btn-outline-danger"
              onClick={props.onClickLogout}>
              Or click here to logout.
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
