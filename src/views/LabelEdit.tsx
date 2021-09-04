import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';


const Header=styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 line-height: 20px;
 padding: 14px;
 font-size: 24px;
 background: white;
`
type Params={
 id:string
}
const LabelEdit:React.FC=()=>{
 const {findTag}=useTags()
 const {id}=useParams<Params>()
 const tag=findTag(parseInt(id))
 return(
    <Layout>
     <Header>
       <Icon name="left"/>
       <span>编辑</span>
       <Icon />
     </Header>

     <div>
      <button>删除</button>
     </div>
    </Layout>
 )
}
export default LabelEdit