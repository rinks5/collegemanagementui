import './App.css';
import { LoginHeader } from './Components/LoginHeader';
import { HomeBody } from './Components/HomeBody';
import { AdminScreen } from './Components/AdminScreen';
import { Header } from './Components/Header';
import { UserScreen } from './Components/UserScreen';
import { StudentApplicationScreen } from './Components/StudentApplicationScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>
        <Switch>
          {/* <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route> */}
           <Route exact path="/">
           <LoginHeader title="College Management"/>
               <HomeBody />
          </Route>

          <Route exact path="/admin">
            <Header title="College Management"/>
            <AdminScreen />
          </Route>

          <Route exact path="/studentStatus">
            <Header title="College Management"/>
            <UserScreen />
          </Route>

          <Route exact path="/studentApplicaion">
            <Header title="College Management"/>
            <StudentApplicationScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
