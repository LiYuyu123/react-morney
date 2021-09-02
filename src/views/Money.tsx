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
    output: string
    setOutput:  React.Dispatch<React.SetStateAction<string>>
    appear:boolean
    setAppear: React.Dispatch<React.SetStateAction<boolean>>
}
export const TypeNumberPad=createContext<ContextType | null>(null)

function Money() {
    const [output,setOutput]=useState('0')
    const [appear,setAppear]=useState(false)
    return (
        <MyLayout>
            <TypeNumberPad.Provider value={{output,setOutput,appear,setAppear}}>
            <Type/>
            <FormItem/>
            <div className="wrapperTags">
                <Tags/>
            </div>
            <NumberPad/>
            </TypeNumberPad.Provider>
        </MyLayout>


    );
}

export default Money;