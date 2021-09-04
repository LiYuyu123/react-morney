import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import Input from '../components/money/Input';


const Header=styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 line-height: 20px;
 padding: 14px;
 font-size: 24px;
 background: white;
`
const InputWrapper=styled.div`
    background: white;
    padding: 1px;
  margin-top: 10px;
`
const ButtonWrapper=styled.div`
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
   >button{
     background: #b62f2f;
     color: white;
     border-radius: 4px;
     border: none;
     height: 40px;
     padding: 0 16px;
   }
`

type Params={
 id:string
}
const LabelEdit:React.FC=()=>{
 const {findTag,updateTag}=useTags()
 const {id:idString}=useParams<Params>()
 const tag=findTag(parseInt(idString))
 return(
    <Layout>
     <Header>
       <Icon name="left"/>
       <span>编辑</span>
       <Icon />
     </Header>
      <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                 onChange={(e)=>{updateTag(tag.id,{name:e.target.value})}}
          />
      </InputWrapper>
     <ButtonWrapper>
      <button>删除</button>
     </ButtonWrapper>
    </Layout>
 )
}
export default LabelEdit