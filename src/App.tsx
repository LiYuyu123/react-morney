import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper=styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Content=styled.div`
 flex-grow: 1;
  overflow: auto;
`
const Ul=styled.ul`
  display: flex;
   li{
     width: 33.3%;
     border: 1px solid blue ;
     display: flex;
     justify-content: center;
     align-items: center;
   }
`
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
                            <NoMatch />
                        </Route>
                    </Switch>
                </Content>
                <nav>
                    <Ul>
                        <li>
                            <Link to="/labels">标签</Link>
                        </li>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                    </Ul>
                </nav>
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
function  NoMatch(){
    return <div>页面不存在</div>
}

export default App