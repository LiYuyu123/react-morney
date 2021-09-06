import React from 'react';
import Nav from './Nav';


type Props={
    className?:string,
    style?:number
}
const Layout:React.FC<Props> =(props)=>{
    let LayoutStyle={
        height:props.style+'px'
    }
    return(
        <div>
            <div className={props.className} style={LayoutStyle}>
                {props.children}
                <Nav/>
            </div>
        </div>
    )
}

export default Layout