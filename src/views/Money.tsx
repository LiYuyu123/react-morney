import Layout from '../components/Layout';
import React from 'react';
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

function Money() {
    return (
        <MyLayout>
            <Type/>
            <FormItem/>
            <div className="wrapperTags">
                <Tags/>
            </div>
            <NumberPad/>
        </MyLayout>


    );
}

export default Money;