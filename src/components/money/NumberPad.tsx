import React from 'react';
import styled from 'styled-components';


const Div=styled.div`
  background: rgb(240, 239, 244);
  .buttons {
    button {
      background: rgb(243, 243, 243);
      width: 25%;
      padding: 6px 10px;
      border: none;
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
                <button >OK</button>
                <button >.</button>
                <button >0</button>
            </div>
        </Div>
    )
}

export default NumberPad