import 'antd/dist/antd.css';
import { Modal, Button ,Input } from 'antd';
import {useState} from 'react';
import styled from 'styled-components';

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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Div>
            <Button type="primary" onClick={showModal} className="addButton">
                新增标签
            </Button>
            <Modal title="新增标签" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="写点什么吧" />
            </Modal>
        </Div>
    );
};
export default Add

