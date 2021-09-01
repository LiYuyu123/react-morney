import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Add from './Add';

const Div=styled.div`
  margin: 20px 40px;
`
const Ul=styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
   >li{
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid #D9D9D9;;
     width: 20%;
     border-radius: 20px;
     margin-right: 10px;
     margin-top: 10px;
     height: 30px;
     >span{
       padding-left: 10px;
     }
   }
`
const Tags = () => {
    return (
        <Div>
            <Add/>
            <Ul>
                <li>
                    <Icon name="衣服"/>
                    <span>衣</span>
                </li>
                <li>
                    <Icon name="食物"/>
                    <span>食</span>
                </li>
                <li>
                    <Icon name="住房"/>
                    <span>住</span>
                </li>
                <li>
                    <Icon name="行人"/>
                    <span>行</span>
                </li>
                <li>
                    <Icon name="行人"/>
                    <span>行</span>
                </li>
                <li>
                    <Icon name="行人"/>
                    <span>行</span>
                </li>
            </Ul>
        </Div>
    );
};

export default Tags