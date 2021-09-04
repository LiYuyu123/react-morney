import React, {useRef, useState} from 'react';
import styled from 'styled-components';


const Div=styled.div`
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
    value:string,
    onChange:(value:string)=>void
}
const FormItem:React.FC<Props> =(props)=>{
    const noteRef=useRef<HTMLInputElement>(null)
    const note=props.value
    const onBlur=()=>{
        if(noteRef.current!==null){
            props.onChange(noteRef.current.value)
        }
    }
    return(
        <Div>
            <span>备注:</span>
            <input type="text" placeholder="写点备注吧"
                   ref={noteRef}
                   defaultValue={note}
                   onBlur={onBlur}
            />
        </Div>
    )
}

export default FormItem