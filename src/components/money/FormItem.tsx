import React from 'react';
import styled from 'styled-components';


const Div=styled.div`
  display: flex;
  margin:20px 35px;
  >span{
    color:rgb(176, 176, 176) ;
  }
  >input{
    border: none;
    border-bottom:1px solid rgb(176, 176, 176);
    flex-grow: 1;
    margin: 0 15px;
    color: rgb(176, 176, 176);
  }
`
const FormItem=()=>{
    return(
        <Div>
            <span>备注:</span>
            <input type="text" placeholder="写点备注吧"/>
        </Div>
    )
}

export default FormItem