import Layout from '../components/Layout';
import React from 'react';
import Type from '../components/money/Type';
import NumberPad from '../components/money/NumberPad';
import Tags from '../components/money/tags';



function Money() {
    return (
        <Layout>
       <Type/>
        <NumberPad/>
         <Tags/>
        </Layout>
    );
}

export default Money