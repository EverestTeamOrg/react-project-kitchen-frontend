import ListErrors from "../../components/ListErrors";
import  { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../services/thunks";
import { logout as logoutAction } from "../../services/commonSlice";
import { useHistory } from "react-router";
import SettingsForm from "../../components/settings-form";

// interface ISettingsForm {
//   setIsUpdatedInfoMsg: (isUpdatedInfoMsg: boolean) => void
// }

const Settings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isUpdatedInfoMsg, setIsUpdatedInfoMsg] = useState(false);

  const logout = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {isUpdatedInfoMsg && <h4 className="text-xs-center">Updated</h4>}

            {/* <ListErrors errors={this.props.errors}></ListErrors> */}

            <SettingsForm setIsUpdatedInfoMsg={setIsUpdatedInfoMsg} />

            <hr />

            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default Settings;
