import Layout from '../components/Layout';
import React from 'react';
import Type from '../components/money/Type';
import NumberPad from '../components/money/NumberPad';
import FormItem from '../components/money/FormItem';
import Tags from '../components/money/tags';




function Money() {
    return (
        <Layout>
       <Type/>
        <NumberPad/>
         <FormItem/>
         <Tags/>
        </Layout>
    );
}

export default Money