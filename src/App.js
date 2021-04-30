import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
