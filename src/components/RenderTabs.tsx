import { NavLink } from "react-router-dom";

function RenderTabs({ username }: { username: string }) {
  return (
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to={`/@${username}`}
          exact
        >
          My Articles
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to={`/@${username}/favorites`}
          exact
        >
          Favorited Articles
        </NavLink>
      </li>
    </ul>
  );
}

export default RenderTabs;
