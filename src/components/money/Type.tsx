import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import {TypeNumberPad} from '../../views/Money';


const Did = styled.div`
  display: flex;
  margin: 20px;
  position: relative;

  > .pay {
    background: rgb(241, 241, 241);;
    font-weight: 800;
    position: absolute;
    bottom: -39px;
    width: 70px;
    padding: 10px 0;
    text-align: center;
  }

  > .type {
    padding: 5px 5px;
    border-radius: 10px;
    background: rgb(255, 217, 28);
    display: flex;
    align-items: center;
    font-weight: 800;
    > span {
      padding-right: 6px;
      padding-left: 6px;
    }
  }

  .output {
    flex-grow: 1;
    line-height: 46px;
    background: rgb(241, 241, 241);
    font-size: 36px;
    text-align: right;
    padding: 0 16px;
    margin-left: 7px;
    border-radius: 8px;
  }
`;
const Type: React.FC = () => {
    const {output,setAppear}=useContext<any>(TypeNumberPad)
    const [type, setType] = useState( '-');
    const [state, setState] = useState(false);
    const onClick = () => {
        setState(true);

    };
    const onClick2 = () => {
        setState(false);
        if(type==='-'){
            setType( '+');
        }else {
            setType( '-');
        }
    };
    return (
        <Did>
            <div className="type" onClick={onClick}>{type==='+' ? <span>收入</span>: <span>支出</span>}<Icon name="下拉"/></div>
            {state ? <div className="pay" onClick={onClick2}>{type==='+' ? <span>支出</span>: <span>收入</span>}</div> : ''}
            <div className="output" onClick={()=>setAppear(true)}>{output}</div>
        </Did>
    )
}
export default Type;