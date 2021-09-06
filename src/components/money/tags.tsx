import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Add from './Add';
import {useTags} from '../../Hooks/useTags';
import {createId} from '../../lib/createId';

const Div=styled.div`
  margin: 20px 40px;
`
const Ul=styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
   >li{
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid #D9D9D9;;
     border-radius: 20px;
     margin-right: 10px;
     margin-top: 10px;
     height: 30px;
     >span{
       padding-right: 8px;
     }
     >svg{
       width: 24px;
       height: 20px;
     }
     &.selected{
       background: rgb(255, 217, 28);
     }
   }
`





type Props={
    value:{id:number,name:string}[],
    onChange:(value:{id:number,name:string}[])=>void
}
const Tags:React.FC<Props> = (props) => {
    const {tags,setTags}=useTags()
    const selectedTags=props.value
    const onToggleTags=(tag:{id:number,name:string})=>{
        const index=selectedTags.indexOf(tag)
        if(index>=0){
            //如果tag被选中，就复制没有被选择的tag，作为新的selectedTags
            props.onChange(selectedTags.filter(t=>t.id!==tag.id))
        }else {
            props.onChange([...selectedTags,tag])
        }
    }
    return (
        <Div>
            <Add  value={tags}
                  onChange={(value)=>{
                      setTags([...tags,{id:createId(),name:value}])
                  }
                  }
            />
            <Ul>
                {tags.map(tag=>{
                    if(['衣','食','住','行'].indexOf(tag.name)>=0){
                        return  <li key={tag.id} onClick={()=>{onToggleTags(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected':''}><Icon name={tag.name}/><span>{tag.name}</span> </li>
                    }else if(tag.name===''){
                        return false
                    } else {
                        return   <li key={tag.id} onClick={()=>{onToggleTags(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected':''}><Icon name="其他"/><span>{tag.name}</span> </li>
                    }
                })}

            </Ul>
        </Div>
    );
};

export default Tags