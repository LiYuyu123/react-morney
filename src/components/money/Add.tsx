import 'antd/dist/antd.css';
import { Modal, Button ,Input } from 'antd';
import React, {useState} from 'react';
import styled from 'styled-components';


const Div=styled.div`
 .addButton{
   box-shadow: none;
   text-shadow:none;
   color:rgb(255, 217, 28) ;
   border: none;
   border-bottom: 1px solid rgb(255, 217, 28);
   background: white;
   !important;
 }
`
type Props={
    value:string[],
    onChange:(value:string)=>void
}
const Add:React.FC<Props> = (props) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [newTag,setNewTag]=useState<any>(null)
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
      if(newTag!==undefined){
        props.onChange(newTag)
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

