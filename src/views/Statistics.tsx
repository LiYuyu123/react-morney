import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../Hooks/useRecords';

import day from 'dayjs';

const MyLayout=styled(Layout)`
   display: flex;
   flex-direction: column;
   height: 100vh;
  .wrapperRecord{
    flex-grow: 1;
    overflow: auto;
  }
`
const Ul = styled.ul`
  background: white;
  display: flex;
  text-align: center;
  font-size: 24px;
  align-items: center;
  margin-bottom: 0;

  > li {
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
      height: 3px;
      background: #333;
    }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Div = styled.div`
  text-align: center;

  > .record {
    margin-top: 20px;
  }
`;
const Header = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px 16px;
  margin-bottom: 0;
`;
const Footer=styled.footer`
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;

  > button {
    background: #b62f2f;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
`
function Statistics() {
    const [type, setType] = useState<'-' | '+'>('-');
    const {records, deleteRecord} = useRecords();
    const hash: { [k: string]: RecordItem[] } = {};
    const selectedRecord = records.filter(r => r.type === type);
    selectedRecord.forEach(r => {
        const key = day(r.createAt).format('YYYY-MM-DD');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });

    const beautify = (string: string) => {
        const RecordDay = day(string);
        const now = day();
        if (RecordDay.isSame(now, 'day')) {
            return '??????';
        } else if (RecordDay.isSame(now.subtract(1, 'day'), 'day')) {
            return '??????';
        } else if (RecordDay.isSame(now.subtract(2, 'day'), 'day')) {
            return '??????';
        } else if (RecordDay.isSame(now, 'year')) {
            return RecordDay.format('M???D???');
        } else {
            return RecordDay.format('YYY???M???D???');
        }
    };
    const select = () => {
        if (type === '-') {
            setType('+');
        } else if (type === '+') {
            setType('-');
        }
    };
    const onClick=()=>{
        deleteRecord()
    }

    return (
        <MyLayout>
            <div>
                <Ul>
                    <li onClick={select} className={type === '-' ? 'selected' : ''}>??????</li>
                    <li onClick={select} className={type === '+' ? 'selected' : ''}>??????</li>
                </Ul>
            </div >
            <div className="wrapperRecord">
                {array.map(([date, record]) => <div key={record.map(r=>r.createAt).toString()}>
                    <Header>
                        <span>{beautify(date)}</span>
                        <span>???{record.reduce((sum, item) => sum + item.amount, 0)}</span>
                    </Header>
                    <div>
                        {record.map(r => {
                            return <Item key={r.createAt}>
                                <div className="oneLine">
                                    {r.tags.map(t => <span key={t.id}>{t.name}</span>)
                                        .reduce((result, span, index, array) =>
                                                result.concat(index < array.length - 1 ? [span, '???'] : [span])
                                            , [] as ReactNode[])
                                    }
                                </div>
                                {r.note && <div className="note">
                                    {r.note}
                                </div>}
                                <div>
                                    ???{r.amount}
                                </div>
                            </Item>;
                        })}
                    </div>
                </div>)}
                <Div>
                    {records.length===0  ? <div className="record">????????????????????????</div>:''}
                </Div>
                <Footer>
                    <button onClick={onClick}>????????????</button>
                </Footer>
            </div>
        </MyLayout>
    );
}

export default Statistics;