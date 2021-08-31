import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Layout=(props:any)=>{
    return(
        <Wrapper>
            <Content>
                {props.children}
            </Content>
            <Nav/>
        </Wrapper>
    )
}

export default Layout