import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);;
  background: white;
  !important;
  > ol{
    display: flex;
    margin-bottom:0;
    !important;
  >li {
    width: 33.3%;
    padding: 4px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .link{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 24px;
        height: 24px;
      }
      &.selected{
        color: rgb(255, 217, 28);
      }
    }
  }
}
`;


const Nav=()=>{
    return(
        <NavWrapper>
            <ol>
                <li>
                    <NavLink className="link" to="/labels" exact activeClassName="selected">
                        <Icon name="label"/>
                        <span>标签</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        <span>记账</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>
                        <span>统计</span>
                    </NavLink>
                </li>
            </ol>
        </NavWrapper>
    )
}

export default Nav