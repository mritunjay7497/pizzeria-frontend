// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Order from "./Order";
import Cart from "./Cart";
import Build from "./Build";
import Menu from "./Menu";
import Footer from "./Footer";
import Go from "./Go";
import Clear from "./Clear";
function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Order" component={Order}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/Build" component={Build}></Route>
          <Route path="/GO" component={Go}></Route>
          <Route path="/Clear" component={Clear}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
