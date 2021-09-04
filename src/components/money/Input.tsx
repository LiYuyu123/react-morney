import React from 'react';
import styled from 'styled-components';

const Label=styled.label`
  display: flex;
  margin:20px;
  padding-left: 10px;
  >span{
    color:rgb(176, 176, 176) ;
    font-size: 14px;
  }
  >input{
    border: none;
    border-bottom:1px solid rgb(176, 176, 176);
    flex-grow: 1;
    margin: 0 15px;
    color: rgb(176, 176, 176);
  }
`
type Props={
    label:string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props> =(props)=>{
    const {label,children,...rest}=props
    return(
        <Label>
            <span>{props.label}</span>
            <input {...rest}/>
        </Label>
    )
}
export default Input