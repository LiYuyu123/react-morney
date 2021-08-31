import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/labels">
                    <Labels/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Route path="/money">
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

function Money() {
    return (
        <Layout>
            <h2>记账</h2>
        </Layout>
    );
}

function Labels() {
    return (
        <Layout>
            <h2>标签</h2>
        </Layout>);

}

function Statistics() {
    return (
        <Layout>
            <h2>统计</h2>
        </Layout>
    );
}

function NoMatch() {
    return <div>页面不存在</div>;
}

export default App;