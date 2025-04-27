import React, { useRef, useState } from 'react';
import { Button, Modal, Form, Input, message, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './style/Profile.module.css';
import '@ant-design/v5-patch-for-react-19';
import { useData, useModal } from '../utils/zustand';
const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e === null || e === void 0 ? void 0 : e.fileList;
};
const SetEdit = () => {
    const formProfile = useRef(null);
    const { data, updateData, SetLoading, RemoveLoading } = useData();
    const { open, setOpen, closeOpen } = useModal();
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'profile.png',
            status: 'done',

        },
    ]);
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
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const checkPassword = (values) => {
        SetLoading();
        const NewData = formProfile.current.getFieldsValue(true).user;
        const oldPassword = values.OldPassword;
        const newPassword = values.user.password;
        if (oldPassword === data.username) {
            if (newPassword.length >= 8) {
                closeOpen();
                RemoveLoading();
                message.success("Muvaffaqiyatli yangilandi!");
            } else {
                message.error("Yangi parol kamida 8ta belgidan iborat bo'lishi kerak");
            }
        } else {
            RemoveLoading();
            message.error("Eski parol noto‘g‘ri");
        }
    };






    return (
        <>
            <Button type="primary" onClick={setOpen}>
                Edit
            </Button>
            <Modal title="Edit Account" open={open}
                footer={null}
                onCancel={closeOpen}
                className={style.modal}
                width={370}
            >
                <div className={style.block}>





                    <Form
                        ref={formProfile}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="vertical"
                        style={{ maxWidth: 370 }}
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
                                    listType="picture-circle"
                                    fileList={fileList}
                                    beforeUpload={() => false}
                                    onChange={handleChange}
                                    name="image"
                                >

                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            </Form.Item>
                            <div className={style.inputs}>

                                <p>Full name</p>
                                <Form.Item name={['user', 'name']} label="Full name" noStyle={true} rules={[{ required: true, message: 'Please input your name!' }]}>
                                    <Input style={{ marginBottom: '15px' }} />
                                </Form.Item>
                                <p>E-mail</p>
                                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]} noStyle={true}>
                                    <Input style={{ marginBottom: '15px' }} />
                                </Form.Item>
                                <p>Old Password</p>
                                <Form.Item
                                    label="Old password"
                                    name='OldPassword'
                                    rules={[{ message: 'Eski parol kiriting!' }]}
                                    noStyle={true}
                                >
                                    <Input.Password style={{ marginBottom: '15px' }} />
                                </Form.Item>
                                <p>New Password</p>
                                <Form.Item
                                    label="New password"
                                    name={['user', 'password']}
                                    rules={[{ message: 'Yangi parol kiriting!' }]}
                                    noStyle={true}
                                >
                                    <Input.Password style={{ marginBottom: '15px' }} />
                                </Form.Item>

                                <Form.Item noStyle={true} >
                                    <div className={style.btnBlock}>

                                        <Button htmlType='reset' onClick={closeOpen} >Cancel</Button>
                                        <Button type="primary" htmlType="submit"  >Submit</Button>
                                    </div>
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