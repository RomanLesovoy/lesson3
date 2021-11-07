import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Message from "./components/Message";
import Home from "./pages/Home";
import Header from "./partials/Header";
import Content from "./partials/Content";
import Aside from "./partials/Aside";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Aside />
            <Content>
                <Switch>
                    <Route path="/message">
                        <Message />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Content>
        </Router>
    </div>
  );
}

export default App;
