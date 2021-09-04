import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Link} from 'react-router-dom';




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
    const {tags,setTags}=useTags()
    return (
        <Layout>
            <TagList>
                {tags.map(tag=>
                    <li key={tag}>
                        <Link to={'/labels/ '+tag}>
                            <span className="oneLine">{tag}</span>
                            <Icon name="right"/>
                        </Link>
                    </li>)}
            </TagList>
        </Layout>);

}

export default Labels