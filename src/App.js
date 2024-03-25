import "./App.css";
import EditProfile from "./component/EditProfile/EditProfile";
import HomePage from "./component/LandingPage/HomePage";
import PlaylistDetail from "./component/PlaylistDetail/PlaylistDetail";
import SearchPage from "./component/searchPage/SearchPage";
import SignUp from "./component/SignUp/SignUp";
import { Route, Switch } from "react-router";
import HomeNavbar from "./component/LandingPage/HomeNavbar";
import Payment from "./component/Payment/Payment";
import Email from "./component/Email/Email";
import store from "./Redux/store";
import { Provider } from "react-redux";
import MsgSuccess from "./component/Email/MsgSuccess";
import Login from "./component/SignUp/Login";
import HomeFooter from "./component/LandingPage/HomeFooter";
import LoginNavbar from "./component/HelperComponent/LoginNavbar";
import PaymentSuccess from "./component/Payment/PaymentSuccess";
import LoginApi from "./component/Api/LoginApi";
import ApiApp from "./component/Api/ApiApp";
import LoginNavbarPlain from './component/HelperComponent/LoginNavbarPlain'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>

          <Route exact path="/">
            <HomePage />
            <HomeFooter />
          </Route>

          <Route exact path="/signUp">
            <HomeNavbar />
            <SignUp />
            <HomeFooter />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/detail">
            <PlaylistDetail />
            <HomeFooter />
          </Route>
          
          <Route exact path="/edit">
            <EditProfile />
            <HomeFooter />
          </Route>

          <Route exact path="/payment">
            <Payment />
            <HomeFooter />
          </Route>

          <Route exact path="/email">
            <Email />
            <HomeFooter />
          </Route>

          <Route exact path="/msgSuccess" >
            <LoginNavbar />
            <MsgSuccess />
            <HomeFooter />
            </Route>

          <Route exact path="/login">
            <HomeNavbar />
            <Login />
            <HomeFooter />
            </Route>
            <Route exact path="/paymentSuccess">
              <HomeNavbar />
              <PaymentSuccess />
              <HomeFooter />
            </Route>
            
            <Route exact path="/api">
              <ApiApp />
            </Route>

        </Switch>
        
      </Provider>
    </div>
  );
}

export default App;


