import React, {createContext, useState} from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Add from './Add';

const Div=styled.div`
  margin: 20px 40px;
`
const Ul=styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
   >li{
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid #D9D9D9;;
     width: 20%;
     border-radius: 20px;
     margin-right: 10px;
     margin-top: 10px;
     height: 30px;
     >span{
       padding-left: 3px;
     }
     &.selected{
       background: rgb(255, 217, 28);
     }
   }
`





type Props={
    value:string[],
    onChange:(value:string[])=>void
}
const Tags:React.FC<Props> = (props) => {
    const [tags,setTags]=useState<string[]>(['衣','食','住','行'])
    const selectedTags=props.value
    const onToggleTags=(tag:string)=>{
          const index=selectedTags.indexOf(tag)
        if(index>=0){
            //如果tag被选中，就复制没有被选择的tag，作为新的selectedTags
            props.onChange(selectedTags.filter(t=>t!==tag))
        }else {
            props.onChange([...selectedTags,tag])
        }
    }
    return (
        <Div>
            <Add  value={tags}
                  onChange={(value)=>{
                     setTags([...tags,value])
                  }
                  }
            />
            <Ul>
                {tags.map(tag=>{
                    if(['衣','食','住','行'].indexOf(tag)>=0){
                      return  <li key={tag} onClick={()=>{onToggleTags(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected':''}><Icon name={tag}/><span>{tag}</span> </li>
                    }else{
                      return   <li key={tag} onClick={()=>{onToggleTags(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected':''}><Icon name="其他"/><span>{tag}</span> </li>
                    }
                })}
            </Ul>
        </Div>
    );
};

export default Tags