import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {useTags} from './useTags';

type RecordItem={
    tagIds:number[],
    note:string,
    type:'-'|'+',
    amount:number,
    createAt:string //ISO 8601
}
type newRecordItem=Omit<RecordItem, 'createAt'>

const useRecords=()=>{
   const [records,setRecords]=useState<RecordItem[]>([])
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])

    const addRecords=(newRecord:newRecordItem)=>{
        if(newRecord.tagIds.length===0){
            alert("请选择标签")
            return false
        }
       const record={...newRecord,createAt:new Date().toISOString()}
       setRecords([...records,record])
        return true
    }
    return {records,addRecords}
}
export {useRecords}