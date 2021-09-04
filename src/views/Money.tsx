import Layout from '../components/Layout';
import React, {createContext, useState} from 'react';
import Type from '../components/money/Type';
import NumberPad from '../components/money/NumberPad';
import Tags from '../components/money/tags';
import FormItem from '../components/money/FormItem';
import styled from 'styled-components';

const MyLayout=styled(Layout)`
  background: white;
  display: flex;
  flex-direction: column;
  .wrapperTags{
    flex-grow: 1;
    overflow: auto;
  }
`
type ContextType= {
    appear:boolean
    setAppear: React.Dispatch<React.SetStateAction<boolean>>
}
type types='-' |'+'
export const TypeNumberPad=createContext<ContextType | null>(null)
function Money() {
    const [appear,setAppear]=useState(false)
    const [selected,setSelected]=useState({
        tags:[] as string[],
        note:'',
        type:'-' as types,
        amount:0
    })
   const onChange=(obj:Partial<typeof selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
   }
    return (
        <MyLayout>
            {selected.type}
            <hr/>
            {selected.note}
            <hr/>
            {selected.tags}
            <hr/>
            {selected.amount}
            <TypeNumberPad.Provider value={{appear,setAppear}}>
            <Type value={selected.type}
                  output={selected.amount}
                  onChange={value=>onChange({type:value}) }
            />
            <FormItem  value={selected.note}
                       onChange={value=>onChange({note:value}) }
            />
            <div className="wrapperTags">
                <Tags value={selected.tags}
                      onChange={value=>onChange({tags:value}) }
                />
            </div>
            <NumberPad value={selected.amount}
                       onChange={value=>onChange({amount:value}) }
                       onOk={()=>{}}
            />
            </TypeNumberPad.Provider>
        </MyLayout>


    );
}

export default Money;