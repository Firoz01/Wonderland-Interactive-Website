
import './App.css';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound'
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Packages from './Pages/Packages/Packages/Packages';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import MemberShip from './Pages/MemberShip/MemberShip';
import Booking from './Pages/Booking/Booking';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAll from './Pages/ManageAll/ManageAll';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/packages/booking/:id'>
                <Booking></Booking>
            </Route>
            <PrivateRoute path='/packages'>
              <Packages></Packages>
            </PrivateRoute>        
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/membership'>
              <MemberShip></MemberShip>
            </Route>
            <Route path='/myorder'>
                <MyOrder></MyOrder>
            </Route>
            <Route path='/manageorderall'>
              <ManageAll></ManageAll>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
