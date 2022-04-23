import ArticleList from "../ArticleList";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { CHANGE_TAB } from "../../constants/actionTypes";
import TabItem from "../Tab/Tab";
import { getAllArticles, getFeedArticles } from "../../api";

// const TagFilterTab = props => {
//   if (!props.tag) {
//     return null;
//   }

//   return (
//     <li className="nav-item">
//       <a href="" className="nav-link active">
//         <i className="ion-pound"></i> {props.tag}
//       </a>
//     </li>
//   );
// };

const mapStateToProps = (state) => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (tab, pager, payload) =>
    dispatch({ type: CHANGE_TAB, tab, pager, payload }),
});

const MainView = (props) => {
  const clickHandler = (type) => {
    if (type === "all") {
      props.onTabClick(type, getAllArticles, getAllArticles());
    } else {
      props.onTabClick(type, getFeedArticles, getFeedArticles());
    }
    // props.onTabClick(type, agent.Articles[type], agent.Articles[type]());
  };

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {props.token && (
            <TabItem
              name="Your Feed"
              onTabClick={clickHandler}
              type="feed"
              active={props.tab === "feed" ? true : false}
              hide={null}
            />
          )}

          <TabItem
            name="All Feed"
            onTabClick={clickHandler}
            type="all"
            active={props.tab === "all" ? true : false}
            hide={null}
          />

          <TabItem
            name={`#${props.tag}`}
            onTabClick={clickHandler}
            type="all"
            active={props.tab ? false : true}
            hide={!props.tag}
          />
        </ul>
      </div>

      <ArticleList
        pager={props.pager}
        articles={props.articles}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
