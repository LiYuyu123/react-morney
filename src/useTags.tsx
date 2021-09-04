import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags=[
    {id:createId(),name:'衣'},
    {id:createId(),name:'食'},
    {id:createId(),name:'住'},
    {id:createId(),name:'行'},
]
const useTags=()=>{ //自定义Hook
    const [tags,setTags]=useState<{id:number,name:string}[]>(defaultTags)
    const findTag=(id:number)=>tags.filter(tag=>tag.id===id)[0]
    const findTagIndex=(id:number)=>{
        let index=-1
        for(let i=0 ;i<tags.length;i++){
            if(tags[i].id===id){
                index=i
                break
            }
        }
        return index
    }
   const updateTag=(id:number,obj:{name:string})=>{
        const index=findTagIndex(id)
        const tagClone=JSON.parse(JSON.stringify(tags))
        tagClone.splice(index,1,{id:id,name:obj.name})
        setTags(tagClone)
   }

    return {tags,setTags,findTag,updateTag,findTagIndex}
}
export {useTags}