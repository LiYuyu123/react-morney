import React, {useContext} from 'react';
import Icon from '../Icon';
import {TypeNumberPad} from '../../views/Money';
import {Div} from './numberPad/numberPadCss';
import {generateOutput} from './numberPad/generateOutput';


type Props={
    value:number,
    onChange:(value:number)=>void,
    onOk?:()=>void
}
const NumberPad:React.FC<Props> =(props)=>{
    const {appear,setAppear}=useContext<any>(TypeNumberPad)
    const output=props.value.toString()
    const setOutput=(output:string)=>{
        let value
       if(output.length>13){
           value=parseFloat(output.slice(0,13))
       }else if(output.length===0){
           value=0
       }else {
           value=parseFloat(output)
       }
       props.onChange(value)
    }
    const onButtonWrapper=(e:React.MouseEvent)=>{
        const text= (e.target as HTMLButtonElement).textContent
        if(text===null){return}
         if(text==='ok'){
             if(props.onOk){props.onOk()}
             return;
         }
         if('0123456789.'.split('').concat(['删除','清空']).indexOf(text)>=0){
                 // @ts-ignore
             setOutput(generateOutput(text,output))
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