import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Labels from './views/Label';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import LabelEdit from './views/LabelEdit';



function App() {
    return (
        <Router>
            <Switch>
                <Route path="/labels" exact>
                    <Labels/>
                </Route>
                <Route path="/labels/:id" exact>
                    <LabelEdit/>
                </Route>
                <Route path="/statistics" exact>
                    <Statistics/>
                </Route>
                <Route path="/money" exact>
                    <Money/>
                </Route>
                <Redirect exact from="/" to="/money"/> {/*默认路径*/}
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}








export default App;