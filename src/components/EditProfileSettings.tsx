import { Link } from 'react-router-dom';

function EditProfileSettings({ isUser }: {isUser: boolean} ) {
  if (isUser) {
    return (
      <Link
        to="/settings"
        className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a"></i> Edit Profile Settings
      </Link>
    );
  }
  return null;
};

export default EditProfileSettings
