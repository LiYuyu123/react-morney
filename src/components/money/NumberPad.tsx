import React, {useContext} from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import {TypeNumberPad} from '../../views/Money';

const Div=styled.div`
   .topButton{
     background: #F0EFF4;
     text-align: center;
     margin-bottom: 5px;
   }
  .buttons {
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: repeat(4, 56px);
    background: #F0EFF4;
    padding: 6px 10px;
    button {
      font-size: 22px;
      background: #F3F3F3;
      margin: 3px;
      border: 1px solid #CACACA;
      &.ok{
        color: white;
        font-size: 20px;
        font-weight: lighter;
        background: #1671CE;
        grid-row-start: 3;
        grid-row-end: 5;
        grid-column-start: 4;
        grid-column-end:5;
      }
      &.zero {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
  }
`


const NumberPad:React.FC=()=>{
    const {output,setOutput,appear,setAppear}=useContext<any>(TypeNumberPad)
    return(
        <Div>
            {appear ?<div>
                <div className="topButton" onClick={()=>setAppear(false)}>
                    <Icon name="下拉2"/>
                </div>
                <div className="buttons">
                    <button >1</button>
                    <button >2</button>
                    <button >3</button>
                    <button>删除</button>
                    <button >4</button>
                    <button >5</button>
                    <button >6</button>
                    <button>清空</button>
                    <button >7</button>
                    <button >8</button>
                    <button >9</button>
                    <button className="ok">OK</button>
                    <button >.</button>
                    <button className="zero">0</button>
                </div>
            </div>:''}
        </Div>
    )
}

export default NumberPad