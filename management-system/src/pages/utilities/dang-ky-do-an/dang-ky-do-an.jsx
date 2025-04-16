import { Typography, Select, Space, Form, Input, Button, ConfigProvider, Tooltip, message, Alert, Steps, Card } from "antd";
import { FormOutlined, FileExclamationOutlined, FileDoneOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import "./dang-ky-do-an.css";
import TextArea from "antd/es/input/TextArea";

// Chú ý: <></> là React Fragment, dùng thay cho <div></div> khi return để tránh lồng nhiều div
function RegisterProject() {
    const studentName = "Trần Đào Trung Kiên";
    const studentId = "B23DCKH068";
    const studentClass = "D23CQKH02-B";
    const canRegister = true;
    // const [canRegister, setCanRegister] = useState(true);
    // const [type, setType] = useState("success");
    const period = "12/4/2025 - 20/4/2025"

    // let content = "Đăng ký đồ án thành công";
    // if (!canRegister) content = "Đăng ký không thành công! Ngoài thời gian đăng ký."

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    // const showMessage = (messageType, content) => {
    //     messageApi.open({
    //         type: messageType,
    //         content,
    //         duration: 10,
    //     });
    // }

    const onFinish = (values) => {
        console.log("uia");
        if (!canRegister) {
            messageApi.open({
                type: "error",
                content: "Đăng ký không thành công! Ngoài thời gian đăng ký.",
            });
            return;
        }
        messageApi.open({
            type: "loading",
            content: "Đang đăng ký",
            duration: "2.5"
        }).then(() => message.success("Đăng ký đồ án thành công", 5));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("aiu");
        if (!canRegister) {
            messageApi.open({
                type: "error",
                content: "Đăng ký không thành công! Ngoài thời gian đăng ký.",
            });
            return;
        }
        messageApi.open({
            type: "error",
            content: "Đăng ký không thành công! Vui lòng điền đầy đủ thông tin.",
            duration: "10"
        });
    };

    const alertCanRegister = (canRegister) => {
        if (!canRegister) {
            return <>
                <Alert
                    message="Ngoài thời gian đăng ký"
                    type="error"
                    showIcon
                    style={{ marginBottom: "16px" }}
                />
            </>
        }
        return <>
            <Alert
                message={<Typography.Text>Trong thời gian đăng ký: {period}</Typography.Text>}
                type="warning"
                showIcon
                style={{ marginBottom: "16px" }}
            />
        </>
    }

    return <>
        {contextHolder}
        <Typography.Title level={4} style={{ fontWeight: "bold" }}>Đăng ký đồ án tốt nghiệp</Typography.Title>
        <Card>
            <Steps
                size="small"
                style={{
                    paddingBottom: 16
                }}

                items={[
                    {
                        title: "Đăng ký",
                        status: "process",
                        description: "12/4 - 30/4/2025",
                        icon: <LoadingOutlined />,
                    },
                    {
                        title: "Báo cáo",
                        status: "wait",
                        description: "15/5 - 30/6/2025",
                        icon: <FileExclamationOutlined />,
                    },
                    {
                        title: "Nộp tệp",
                        status: "wait",
                        description: "12/7 - 30/7/2025",
                        icon: <FileDoneOutlined />,
                    },
                ]}
            />

            {alertCanRegister(canRegister)}

            <Alert
                message="Thông tin sinh viên"
                description={
                    <>
                        <Typography.Text>Họ và tên: {studentName}</Typography.Text>
                        <br />
                        <Typography.Text>Mã sinh viên: {studentId}</Typography.Text>
                        <br />
                        <Typography.Text>Lớp hành chính: {studentClass}</Typography.Text>
                    </>
                }
                type="info"
                showIcon
                style={{ marginBottom: "16px" }}
            />

            <div className="form-container">

                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    style={{
                        width: "100%"
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    disabled={!canRegister}
                >
                    <Space className="select-field" size={[16, 0]}>
                        <Form.Item className="select-container"
                            name="field"
                            rules={[
                                { required: true, message: 'Vui lòng chọn ngành!' }, // Rule required
                            ]}
                        >
                            <Select className="select-box"
                                showSearch
                                placeholder="Chọn ngành"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: "khoa-hoc-may-tinh",
                                        label: "Khoa học máy tính"
                                    },
                                    {
                                        value: "tri-tue-nhan-tao",
                                        label: "Trí tuệ nhân tạo"
                                    },
                                    {
                                        value: "ky-thuat-dien-dien-tu",
                                        label: "Kỹ thuật điện tử"
                                    },
                                    {
                                        value: "dien-tu-vien-thong",
                                        label: "Điện tử viễn thông"
                                    },
                                ]}
                            >
                            </Select>
                        </Form.Item>

                        <Form.Item className="select-container"
                            name="period"
                            rules={[
                                { required: true, message: 'Vui lòng chọn đợt!' }, // Rule required
                            ]}
                        >
                            <Select className="select-box"
                                showSearch
                                placeholder="Chọn đợt"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: "dot-1-hk1",
                                        label: "Đợt 1 HK1 24-25"
                                    },
                                    {
                                        value: "dot-2-hk1",
                                        label: "Đợt 2 HK1 24-25"
                                    },
                                    {
                                        value: "dot-1-hk2",
                                        label: "Đợt 1 HK2 24-25"
                                    },
                                    {
                                        value: "dot-2-hk2",
                                        label: "Đợt 2 HK2 24-25"
                                    },
                                ]}
                            >
                            </Select>
                        </Form.Item>

                        <Form.Item className="select-container"
                            name="professor"
                            rules={[
                                { required: true, message: 'Vui lòng chọn giảng viên!' }, // Rule required
                            ]}
                        >
                            <Select className="select-box"
                                showSearch
                                placeholder="Chọn giảng viên hướng dẫn"
                                optionFilterProp="label"

                                options={[
                                    {
                                        value: "gv-1",
                                        label: "Giảng viên 1",
                                    },
                                    {
                                        value: "gv-2",
                                        label: "Giảng viên 2"
                                    },
                                    {
                                        value: "gv-3",
                                        label: "Giảng viên 3"
                                    },
                                    {
                                        value: "gv-4",
                                        label: "Giảng viên 4"
                                    }
                                ]}
                            >
                            </Select>
                        </Form.Item>

                    </Space>
                    <Space className="input-container" size={[16, 0]}>
                        <Form.Item
                            label="Tên đồ án"
                            name="project-name"
                            rules={[{ required: true, message: "Cần nhập tên đồ án" }]}
                            className="form-item-input"
                        >
                            <Input className="text-input" placeholder="Nhập tên đồ án" />
                        </Form.Item>

                        <Form.Item
                            label="Từ khoá"
                            name="keyword"
                            rules={[{ required: true, message: "Cần nhập từ khoá" }]}
                            className="form-item-input"
                        >
                            <Input className="text-input" placeholder="Nhập từ khoá chính" />
                        </Form.Item>
                    </Space>

                    <div className="textarea-container">
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[{ required: true, message: "Cần nhập mô tả" }]}
                            className="form-item-textarea"
                        >
                            <TextArea className="text-input" placeholder="Nhập mô tả" />
                        </Form.Item>

                        <Form.Item
                            label="Mong muốn"
                            name="outcome"
                            rules={[{ required: true, message: "Cần nhập mong muốn" }]}
                            className="form-item-textarea"
                        >
                            <TextArea className="text-input" placeholder="Nhập mong muốn" />
                        </Form.Item>

                    </div>

                    <div className="button-container">
                        <Space>
                            <Tooltip title="Xoá tất cả dữ liệu vừa nhập">
                                <Form.Item>
                                    <Button className="cancel-button" type="primary" onClick={() => form.resetFields()}>
                                        Huỷ
                                    </Button>
                                </Form.Item>
                            </Tooltip>
                            <Tooltip title="Nộp đơn đăng ký, chú ý phải điền và chọn đầy đủ thông tin">
                                <Form.Item>
                                    <Button className="submit-button" type="primary" htmlType="submit">
                                        Đăng ký
                                    </Button>
                                </Form.Item>
                            </Tooltip>

                        </Space>
                    </div>
                </Form>
            </div >
        </Card>

    </>
}

export default RegisterProject