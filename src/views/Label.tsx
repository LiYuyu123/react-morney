import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../Hooks/useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const MyLayout=styled(Layout)`
    display: flex;
    flex-direction: column;
    height: 100vh;
  .wrapperTag{
    flex-grow: 1;
    overflow: auto;
  }
`
const TagList=styled.ol`
    font-size: 16px;
    margin: 0 10px;
  >li{
    background: white;
    margin-top: 10px;
    border-radius: 10px;
    >a{
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
function Labels() {
    const {tags}=useTags()
    return (
        <MyLayout>
            <div className="wrapperTag">
            <TagList>
                    {tags.map(tag=>
                        <li key={tag.id}>
                            <Link to={'/labels/ '+tag.id}>
                                <span className="oneLine">{tag.name}</span>
                                <Icon name="right"/>
                            </Link>
                        </li>)}
            </TagList>
            </div>
        </MyLayout>);

}

export default Labels