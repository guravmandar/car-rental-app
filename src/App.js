import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./containers/Header";
import CarListing from "./containers/CarListing";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={CarListing}/>
                    <Route>404 Not Found</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
