import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


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
    .link{
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
}
`;


const Nav=()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Link className="link" to="/labels">
                        <Icon name="label"/>
                        <span>标签</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/money">
                        <Icon name="money"/>
                        <span>记账</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/statistics">
                        <Icon name="statistics"/>
                        <span>统计</span>
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav