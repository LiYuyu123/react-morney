import React, {useRef, useState} from 'react';
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
const FormItem:React.FC=()=>{
    const [note,setNote]=useState('')
    const noteRef=useRef<HTMLInputElement>(null)
    console.log(note)
    const onBlur=()=>{
        if(noteRef.current!==null){
            setNote(noteRef.current.value)
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