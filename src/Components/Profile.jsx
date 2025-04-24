import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    Upload,
} from 'antd';
const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e === null || e === void 0 ? void 0 : e.fileList;
};
const ProfileEdit = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [fileList, setFileList] = useState([]);
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
    return (
        <>
            <div >
                <Form.Item>
                    <Button onClick={() => setComponentDisabled(!componentDisabled)}>Edit</Button>
                </Form.Item>

                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    disabled={componentDisabled}
                    style={{ maxWidth: 1000 }}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'Full name']} label="Full name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Yangi parol kiriting!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confir your password"
                        name="Confir your password"
                        rules={[{ required: true, message: 'Parol bir xil emas!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="#" listType="picture-circle" onChange={handleChange}>

                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button >Submit</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button >Reset</Button>
                    </Form.Item>
                </Form>
            </div >
        </>
    );
};
export default () => <ProfileEdit />;