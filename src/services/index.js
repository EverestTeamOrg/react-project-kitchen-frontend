import homeReducer from './homeSlice'
import articleReducer from './articleSlice'
import articleListReducer from './articleListSlice'
import  commonReducer from './commonSlice'


const rootReducer = {
  home: homeReducer,
  article: articleReducer,
  articleList: articleListReducer,
  common: commonReducer,
}

export default rootReducer