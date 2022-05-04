import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default App;
