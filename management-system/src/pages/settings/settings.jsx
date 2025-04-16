import {
    Typography,
    Card,
    Form,
    Switch,
    Select,
    Input,
    Button,
    message,
    Space
} from "antd";
import { useState } from "react";


function Settings() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const { Option } = Select;


    const initialSettings = {
        darkMode: false,
        language: "vi",
        password: "",
        confirmPassword: ""
    };

    const onFinish = (values) => {
        setLoading(true);
        setTimeout(() => {
            message.success("Cập nhật cài đặt thành công!");
            setLoading(false);
            form.resetFields(["password", "confirmPassword"]);
        }, 1000);
    };


    return <>
        <Typography.Title level={4} style={{ fontWeight: "bold" }}>Cài đặt</Typography.Title>
        <Card>
            <Form
                form={form}
                layout="vertical"
                initialValues={initialSettings}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Giao diện tối"
                    name="darkMode"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>

                <Form.Item label="Ngôn ngữ" name="language">
                    <Select>
                        <Option value="vi">Tiếng Việt</Option>
                        <Option value="en">English</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Mật khẩu mới" name="password">
                    <Input.Password placeholder="Nhập mật khẩu mới..." />
                </Form.Item>

                <Form.Item
                    label="Xác nhận mật khẩu"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("Mật khẩu không khớp!"));
                            }
                        })
                    ]}
                >
                    <Input.Password placeholder="Nhập lại mật khẩu..." />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Lưu thay đổi
                        </Button>
                        <Button onClick={() => form.resetFields()}>Đặt lại</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    </>
}

export default Settings