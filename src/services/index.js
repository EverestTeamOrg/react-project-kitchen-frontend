import homeReducer from './homeSlice';
import articleReducer from './articleSlice';
import articleListReducer from './articleListSlice';
import commonReducer from './commonSlice';
import editorReducer from './editorSlice';
import profileReducer from './profileSLice';
import settingsReducer from './settingsSlice'

const rootReducer = {
  home: homeReducer,
  article: articleReducer,
  articleList: articleListReducer,
  common: commonReducer,
  editor: editorReducer,
  profile: profileReducer,
  settings: settingsReducer,
}

export default rootReducer