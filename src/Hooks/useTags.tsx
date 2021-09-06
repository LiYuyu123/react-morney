import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';


const useTags=()=>{ //自定义Hook
    const [tags,setTags]=useState<{id:number,name:string}[]>([])
    useEffect(()=>{
       let localTag= JSON.parse(window.localStorage.getItem('tags')||'[]')
       if(localTag.length===0 ){
           localTag=[
               {id:createId(),name:'衣'},
               {id:createId(),name:'食'},
               {id:createId(),name:'住'},
               {id:createId(),name:'行'},
           ]
       }
       setTags(localTag)
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)
    const getName=(id:number)=>{
       const tag= tags.filter(t=>t.id===id)[0]
        return tag ? tag.name:''
    }
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
      setTags(tags.map(tag=>tag.id===id ? {id,name:obj.name}:tag))

       //  //获取你要改的tag的下标
       //  const index=findTagIndex(id)
       // //深拷贝tags得到tagClone
       //  const tagClone=JSON.parse(JSON.stringify(tags))
       // //把tagClone的第index删掉，换成{id:name,obj:obj.name}
       //  tagClone.splice(index,1,{id:id,name:obj.name})
       //  setTags(tagClone)
   }
   const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
    }

    return {tags,getName,setTags,findTag,updateTag,findTagIndex,deleteTag}
}
export {useTags}