import React from "react";
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

// components
import Layout from "./RouteMenunComponents/Layout/Layout";



// pages
import Error from "../pages/error";
import LoginContainer from "../pages/login/LoginContainer";

const App = (props) => {

  // global
  const { isAuthenticated } = props

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render = {() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={LoginContainer} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {

    return (
      <Route
        {...rest}
        
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                  explain: '로그인 인증 실패'
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}



export default App;