import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MenuBar from "./MenuBar";
import Dashboard from "./pages/Dashboard";

import EmailSent from "./pages/EmailSent";
import PrivateRoute from "./PrivateRoute";
import Internship from "./pages/Internship";
import Footer from "./Footer";
import { listCompanies } from "./actions/companyActions";
import { useDispatch } from "react-redux";
import LandingPage from "./pages/LandingPage";

function App() {
  const dispatch = useDispatch();
  /* const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
 */
  /* useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem('auth-token', "");
        token = "";
      }


      const userRes = await Axios.get('/:user_id',
        { headers: { "x-auth-token": token } },
      );
      console.log("this is the response" + userRes.data)
      setUserData({
        token,
        user: userRes.data,
      })
    };
    checkLoggedIn();
  }, []) */

  
  useEffect(() => {
    dispatch(listCompanies());
}, [dispatch, listCompanies]);

  return (
    <Router>
      <div className="app">
        <div className="menubar">
          <MenuBar />
        </div>
       
          <Switch>
          
            <Container>
                {/* <Route path='/emailsent' component={EmailSent} /> */}
                <Route  path="/login" component={Login} />
                <Route  path="/signup" component={Register} />
                <Route  path='/internships' component={Internship} />
                <PrivateRoute   path="/dashboard" component={Dashboard} />
                <Route  path='/home' component={Home} />
              
            <Route exact path='/' component={LandingPage} />
              
              
            </Container>
          </Switch>
            
            <Footer />
          
      </div>
    </Router>
  );
}

export default App;
