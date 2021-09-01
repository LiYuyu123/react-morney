import Layout from '../components/Layout';
import React from 'react';
import Type from '../components/money/Type';
import NumberPad from '../components/money/NumberPad';
import Tags from '../components/money/tags';
import FormItem from '../components/money/FormItem';
import styled from 'styled-components';
import Nav from '../components/Nav';

const Section=styled.section`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
  background: white;
  !important;
  .wrapperTags{
    flex-grow: 1;
    overflow: auto;
  }
`
function Money() {
    return (
        <Section>
            <Type/>
            <FormItem/>
            <div className="wrapperTags">
                <Tags/>
            </div>
            <div className="wrapperNumber">
                <NumberPad/>
                <Nav/>
            </div>
        </Section>
    );
}

export default Money;