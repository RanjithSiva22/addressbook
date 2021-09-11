import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Home from './screens/home';
import View from './screens/view';
import Login from './screens/login';
import About from './screens/about';

function App() {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/view" exact component={View}></Route>          
          <Route path="/address" exact component={View}></Route>          
          <Route path="/about" exact component={About}></Route>          

        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
