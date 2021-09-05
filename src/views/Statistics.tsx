import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {useRecords} from '../Hooks/useRecords';
import {useTags} from '../Hooks/useTags';
import day from 'dayjs'

const Ul=styled.ul`
  background: white;
  display: flex;
  text-align: center;
  font-size: 24px;
  align-items: center;
  >li{
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
  }
`
const Item=styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`
function Statistics() {
    const [type,setType]=useState<'-'|'+' >('-')
    const {records}=useRecords()
    const {getName}=useTags()
    const select=()=>{
        if(type==='-'){
            setType('+')
        }else if(type==='+'){
            setType('-')
        }
    }
    return (
        <Layout>
            <div>
                <Ul>
                    <li onClick={select} className={type==='-' ? 'selected':''}>支出</li>
                    <li onClick={select} className={type==='+' ? 'selected':''}>收入</li>
                </Ul>
            </div>
            <div>
                {records.map(r=>{
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(t=><span>{getName(t)}</span>)}
                        </div>
                        {r.note && <div className="note">
                            {r.note}
                        </div>}
                        <div >
                            ￥{r.amount}
                        </div>
                        {/*{day(r.createAt).format('YYYY年MM月DD日')}*/}
                        </Item>
                })}
            </div>
        </Layout>
    );
}

export default Statistics