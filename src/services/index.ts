import homeReducer from './homeSlice';
import articleReducer from './articleSlice';
import articleListReducer from './articleListSlice';
import commonReducer from './commonSlice';
import editorReducer from './editorSlice';
import profileReducer from './profileSlice'
import settingsReducer from './settingsSlice';
import authReducer from './authSlice';

const rootReducer = {
  home: homeReducer,
  article: articleReducer,
  articleList: articleListReducer,
  common: commonReducer,
  editor: editorReducer,
  profile: profileReducer,
  settings: settingsReducer,
  auth: authReducer,
}

export default rootReducer
