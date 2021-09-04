import React, {useContext} from 'react';
import Icon from '../Icon';
import {TypeNumberPad} from '../../views/Money';
import {Div} from './numberPad/numberPadCss';



const NumberPad:React.FC=()=>{
    const {output,_setOutput,appear,setAppear}=useContext<any>(TypeNumberPad)
    const setOutput=(output:string)=>{
       if(output.length===13){
           return
       }else {
           _setOutput(output)
       }
    }
    const onButtonWrapper=(e:React.MouseEvent)=>{
        const text= (e.target as HTMLButtonElement).textContent
        if(text===null){return}
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (output === '0') {
                    setOutput(text) ;
                } else {
                    setOutput( output + text)
                }
                break;
            case '删除':
                if (output.length === 1) {
                    setOutput('0') ;
                } else {
                    setOutput( output.slice(0, -1) )
                }
                break;
            case '清空':
                setOutput('0')
                break;
            case '.':
                if (output.indexOf('.') >= 0) {
                    return;
                }
                setOutput( output + '.')
                break;
            case 'ok':
                console.log('1')
                break;
        }
    }
    return(
        <Div>
            {appear ?<div>
                <div className="topButton" onClick={()=>setAppear(false)}>
                    <Icon name="下拉2"/>
                </div>
                <div className="buttons" onClick={onButtonWrapper}>
                    <button >1</button>
                    <button >2</button>
                    <button >3</button>
                    <button>删除</button>
                    <button >4</button>
                    <button >5</button>
                    <button >6</button>
                    <button>清空</button>
                    <button >7</button>
                    <button >8</button>
                    <button >9</button>
                    <button className="ok">OK</button>
                    <button >.</button>
                    <button className="zero">0</button>
                </div>
            </div>:''}
        </Div>
    )
}

export default NumberPad