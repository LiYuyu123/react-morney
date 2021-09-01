import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Did=styled.div`
  display: flex;
  margin: 20px;
  >.type {
    padding: 5px 5px;
    border-radius: 10px;
    background: rgb(255, 217, 28);
    display: flex;
    align-items: center;
    font-weight: 800;
    >span {
      padding-right: 6px;
      padding-left: 6px;
    }
    }
  .output{
    flex-grow: 1;
    line-height: 46px;
    background: rgb(241, 241, 241);
    font-size: 36px;
    text-align: right;
    padding: 0 16px;
    margin-left: 7px;
    border-radius: 8px;
  }
`
const Type=()=>{
    return (
        <Did>
            <div className="type">
                <span>收入</span>
                <Icon  name="下拉"/>
            </div>
           <div className="output">0</div>
        </Did>
    )
}
export default Type