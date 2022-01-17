import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StudentCardForm from "./pages/StudentCardForm";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/form" component={StudentCardForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
