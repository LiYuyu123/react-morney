import 'antd/dist/antd.css';
import { Modal, Button ,Input } from 'antd';
import { useContext,  useState} from 'react';
import styled from 'styled-components';
import {AllTags} from './tags';

const Div=styled.div`
 .addButton{
   box-shadow: none;
   color:rgb(255, 217, 28) ;
   border: none;
   border-bottom: 1px solid rgb(255, 217, 28);
   background: white;
   !important;
 }
`

const Add= () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [newTag,setNewTag]=useState<any>(null)
    const {tags,setTags}=useContext<any>(AllTags)

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
      if(newTag!==undefined){
         setTags([...tags,newTag])
      }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const inputChange=(e:any)=>{
        const tagName=e.target.value
        if(tagName!=='') {
            setNewTag(tagName)
        }

    }
    return (
        <Div>
            <Button type="primary" onClick={showModal} className="addButton">
                新增标签
            </Button>
            <Modal title="新增标签" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="写点什么吧" onChange={inputChange}  />
            </Modal>
        </Div>
    );
};
export default Add

