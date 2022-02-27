import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const Login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

const Register = lazy(() =>
  import("./views/pages/authentication/register/Register")
)
const Home = lazy(() =>
  import("./views/pages/Home")
)

const Transaction = lazy(() =>
  import("./views/pages/Transaction")
)
const Reseller = lazy(() =>
  import("./views/pages/Reseller/ReactTables")
)

// const UserEdit = lazy(() =>
//   import("./views/pages/edit/Information")
// )



const Wallet = lazy(() =>
  import("./views/pages/Wallet")
)

const Settings = lazy(() =>
  import("./views/pages/Settings")
)

const PaymentMethod = lazy(() =>
  import("./views/pages/PaymentMethod")
)

const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
        <AppRoute
            exact
            path="/"
            component={Login}
          />
           <AppRoute
            exact
            path="/Register"
            component={Register}
          />
          <AppRoute
            exact
            path="/Dashboard"
            component={Home}
          />
              <AppRoute
            exact
            path="/Reseller"
            component={Reseller}
          />

          <AppRoute
            exact
            path="/Transaction"
            component={Transaction}
          />
          {/* <AppRoute
            exact
            path="/UserEdit"
            component={UserEdit}
          /> */}

          <AppRoute
            path="/wallet"
            component={Wallet}
          />
           <AppRoute
            path="/Settings"
            component={Settings}
          />
           <AppRoute
            path="/PaymentMethod"
            component={PaymentMethod}
          />

        </Switch>
      </Router>
    )
  }
}

export default AppRouter
