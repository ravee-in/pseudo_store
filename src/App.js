import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Route>
            404 Not Found!
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
