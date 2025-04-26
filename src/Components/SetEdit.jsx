import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, message, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './style/Profile.module.css';
import '@ant-design/v5-patch-for-react-19';
import useData from '../utils/zustand';
const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e === null || e === void 0 ? void 0 : e.fileList;
};
const SetEdit = () => {
    const { data, getData } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'profile.png',
            status: 'done',

        },
    ]);

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        }
    };
    const uploadButton = (
        <button
            style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
            type="button"
        >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    const checkPassword = (values) => {
        const oldPassword = values.password;
        const newPassword = values.passwordConfirm;

        if (oldPassword === data.password) {
            console.log("1.1")
            if (newPassword && newPassword.length >= 8) {
                console.log("1.2")
                message.success("Muvaffaqiyatli yangilandi!");
            } else {
                console.log("0.2")
                message.error("Yangi parol kamida 8ta belgidan iborat bo'lishi kerak");
            }
        } else {
            console.log("0.1")
            message.error("Eski parol noto‘g‘ri");
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };





    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={style.block}>





                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="vertical"
                        style={{ maxWidth: 1000 }}
                        validateMessages={validateMessages}
                        initialValues={{
                            user: {
                                name: data.name,
                                email: data.email,
                            }
                        }}
                        onFinish={checkPassword}
                    >
                        <div className={style.form}>
                            <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload
                                    action="#"
                                    listType="picture-circle"
                                    onChange={handleChange}
                                    fileList={fileList}
                                // showUploadList={{ showPreviewIcon: false }}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            </Form.Item>
                            <div className={style.inputs}>

                                <Form.Item name={['user', 'name']} label="Full name" >
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Old password"
                                    name="password"
                                    rules={[{ message: 'Eski parol kiriting!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="New password"
                                    name="passwordConfirm"
                                    rules={[{ message: 'Yangi parol kiriting!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" >Submit</Button>
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="reset">Reset</Button>
                                </Form.Item>
                            </div>
                        </div >
                    </Form>
                </div>
            </Modal>

           
        </>
    );
};
export default SetEdit;