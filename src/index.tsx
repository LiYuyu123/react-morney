import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.scss"
import './helper.scss'

if(document.body.clientHeight>900){
    window.alert('请用手机打开本页面，以保证浏览效果')
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


