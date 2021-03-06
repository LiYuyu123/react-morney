import React from 'react';
import {useTags} from '../Hooks/useTags';
import {useParams,useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import Input from '../components/money/Input';

const MyLayout=styled(Layout)`
    display: flex;
  flex-direction: column;
  height: 100vh;
  >.main{
    flex-grow: 1;
    overflow: auto;
  }
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  font-size: 24px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 1px;
  margin-top: 10px;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;

  > button {
    background: #b62f2f;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
`;

type Params = {
    id: string
}
const LabelEdit: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    const {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));
    const history=useHistory()
    const onClick=()=>{
        history.goBack()
    }
    return (
        <MyLayout>
            <Header>
                <Icon name="left" onClick={onClick}/>
                <span>编辑</span>
                <Icon/>
            </Header>
            <main className="main">
                {tag ?  <div>
                    <InputWrapper>
                        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                               onChange={(e) => {
                                   updateTag(tag.id, {name: e.target.value});
                               }}
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                        <button onClick={() => {
                            deleteTag(tag.id)
                            history.goBack()
                        }}>删除</button>
                    </ButtonWrapper>
                </div> : <div>tag不存在</div>}
            </main>
        </MyLayout>
    );
};
export default LabelEdit;