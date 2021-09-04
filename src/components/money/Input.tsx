import React from 'react';
import styled from 'styled-components';

const Label=styled.label`
  display: flex;
  margin:10px 20px;
  padding-left: 10px;
  >span{
    font-size: 16px;
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
    className?:string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props> =(props)=>{
    const {label,children,className,...rest}=props
    return(
        <Label>
            <span>{props.label}</span>
            <input {...rest} className={props.className}/>
        </Label>
    )
}
export default Input