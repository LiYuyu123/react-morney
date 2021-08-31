import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg')
require('icons/label.svg')
require('icons/statistics.svg')

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);;
  > ul {
  display: flex;
  li {
    width: 33.3%;
    padding: 4px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      width: 24px;
      height: 24px;
    }
  }
}
`;


const Nav=()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref='#label'/>
                    </svg>
                    <Link to="/labels">标签</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref='#money'/>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref='#statistics'/>
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav