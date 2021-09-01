import Layout from '../components/Layout';
import React from 'react';
import Type from '../components/money/Type';
import NumberPad from '../components/money/NumberPad';
import Tags from '../components/money/tags';
import FormItem from '../components/money/FormItem';


function Money() {
    return (
        <Layout>
            <Type/>
            <FormItem/>
            <Tags/>
            <NumberPad/>
        </Layout>
    );
}

export default Money;