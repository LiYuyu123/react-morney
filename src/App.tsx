import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';



const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
    return (
        <Router>
            <Wrapper>
                <Content>
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
                </Content>
                <Nav />
            </Wrapper>
        </Router>
    );
}

function Money() {
    return <h2>记账</h2>;
}

function Labels() {
    return <h2>标签</h2>;
}

function Statistics() {
    return <h2>统计</h2>;
}

function NoMatch() {
    return <div>页面不存在</div>;
}

export default App;