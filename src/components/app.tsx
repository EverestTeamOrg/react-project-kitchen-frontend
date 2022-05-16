import Header from "./header";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Editor from "../pages/editor/Editor";
import Home from "../pages/home-page/home-page";
import Login from "../pages/login/login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/register";
import Settings from "../pages/settings/settings";
import NotFound404 from "../pages/notFound404/notFound404"
import { authThunk } from "../services/thunks";
import { Layout } from "./StyledComponents/Layout";
import Footer from "./Footer";
import { useAppDispatch, useAppSelector } from "../services/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((store) => store.common);

  useEffect(() => {
    if (token) {
      dispatch(authThunk());
    }
  }, []);

// <<<<<<< HEAD
//     return (
//       <div>
//         <Header
//           appName={appName}
//           currentUser={currentUser}
//         />
//         {error && <p>{error}</p> }
//         <Switch>
// =======
  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/editor/:slug" component={Editor} exact />
          <Route path="/editor" component={Editor} exact />
          <Route path="/article/:id" component={Article} />
          <Route path="/settings" component={Settings} />
          <Route path="/@:username/favorites" component={Profile} />
          <Route path="/@:username" component={Profile} />
          <Route component={NotFound404}/>
        </Switch>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
