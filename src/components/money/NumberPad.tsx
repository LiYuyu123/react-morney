import React from 'react';
import styled from 'styled-components';


const Div=styled.div`
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
const NumberPad=()=>{
    return(
        <Div>
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
        </Div>
    )
}

export default NumberPad