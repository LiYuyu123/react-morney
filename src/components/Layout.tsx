import React from 'react';
import Nav from './Nav';




const Layout=(props:any)=>{
    return(
        <div>
            <div className={props.className}>
                {props.children}
                <Nav/>
            </div>
        </div>
    )
}

export default Layout