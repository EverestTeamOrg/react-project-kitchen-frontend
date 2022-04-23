import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { SET_PAGE } from '../constants/actionTypes';
import { getAllArticles } from '../api';

const mapDispatchToProps = (dispatch: any) => ({
  onSetPage: (page: any, payload: any) =>
    dispatch({ type: SET_PAGE, page, payload })
});

interface TListPaginationProps {
  articlesCount: any;
  pager: any;
  onSetPage: (arg0: any, arg1: any ) => void;
  currentPage: any
}

const ListPagination: React.FC<TListPaginationProps> = (props) => {
  if (props.articlesCount <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = (page: any) => {
    if(props.pager) {
      props.onSetPage(page, props.pager(page));
    }else {
      // props.onSetPage(page, agent.Articles.all(page))
      props.onSetPage(page, getAllArticles(page))
    }
  };

  return (
    <nav>
      <ul className="pagination">

        {
          range.map(v => {
            const isCurrent = v === props.currentPage;
            const onClick = (e: React.SyntheticEvent) => {
              e.preventDefault();
              setPage(v);
            };
            return (
              <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={onClick}
                key={v.toString()}>

                <a className="page-link" href="">{v + 1}</a>

              </li>
            );
          })
        }

      </ul>
    </nav>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
