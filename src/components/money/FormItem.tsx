import React, {ChangeEventHandler, useRef} from 'react';
import Input from './Input';


type Props={
    value:string,
    onChange:(value:string)=>void
}
const FormItem:React.FC<Props> =(props)=>{
    const note=props.value
    const onChange: ChangeEventHandler<HTMLInputElement> =(e)=>{
      props.onChange(e.target.value)
    }
    return(
        <Input label="备注" type="text" value={note} onChange={onChange} placeholder="写点备注吧" />
    )
}

export default FormItem