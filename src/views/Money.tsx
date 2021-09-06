import Layout from '../components/Layout';
import React, {createContext, useState} from 'react';
import Type from '../components/money/Type';
import NumberPad from '../components/money/NumberPad';
import Tags from '../components/money/tags';
import FormItem from '../components/money/FormItem';
import styled from 'styled-components';
import {useRecords} from '../Hooks/useRecords';

const MyLayout=styled(Layout)`
 background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .wrapperTags{
    flex-grow: 1;
    overflow: auto;
  }
`
type ContextType= {
    output:string
    setOutput:React.Dispatch<React.SetStateAction<string>>
    appear:boolean
    setAppear: React.Dispatch<React.SetStateAction<boolean>>
}
type types='-' |'+'
export const TypeNumberPad=createContext<ContextType | null>(null)
function Money() {
    const [output,setOutput]=useState('0')
    const [appear,setAppear]=useState(true)
    const [selected,setSelected]=useState({
        tagIds:[] as number[],
        note:'',
        type:'-' as types,
        amount:0
    })
    const {addRecords}=useRecords()
   const onChange=(obj:Partial<typeof selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
   }
   const submit=()=>{
       if(addRecords(selected)){
           alert('保存成功')
           setSelected({
               tagIds:[] as number[],
               note:'',
               type:'-' as types,
               amount:0
           })
       }
   }
    return (
        <MyLayout>
            <TypeNumberPad.Provider value={{output,setOutput,appear,setAppear}}>
                    <Type value={selected.type}
                          onChange={value=>onChange({type:value}) }
                    />
                    <FormItem  value={selected.note}
                               onChange={value=>onChange({note:value}) }
                    />
                    <div className="wrapperTags">
                        <Tags value={selected.tagIds}
                              onChange={value=>onChange({tagIds:value}) }
                        />
                    </div>
                    <NumberPad onChange={value=>onChange({amount:value}) }
                               onOk={submit}
                    />
            </TypeNumberPad.Provider>
        </MyLayout>


    );
}

export default Money;