import { Typography, Select, Space, Form, Input, Button, Tooltip, message, Alert, Steps, Card } from "antd";
import { FormOutlined, FileExclamationOutlined, FileDoneOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined, SendOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { React, useState } from "react";
import "./bao-cao-tien-do.css";
import TextArea from "antd/es/input/TextArea";

// Chú ý: <></> là React Fragment, dùng thay cho <div></div> khi return để tránh lồng nhiều div
function ProgressReport() {
    const studentName = "Trần Đào Trung Kiên";
    const studentId = "B23DCKH068";
    const studentClass = "D23CQKH02-B";
    const canReport = true;

    const period = "12/4/2025 - 20/4/2025"


    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [status, setStatus] = useState("idle");

    // const handleSubmitFinish = (values) => {
    //     setStatus("loading");

    //     setTimeout(() => {
    //         setStatus("done");

    //         setTimeout(() => {
    //             setStatus("idle")
    //         }, 100000000);
    //     }, 2000);
    // }

    const changeIcon = () => {
        if (status === "loading") return <LoadingOutlined />
        if (status === "done") return <CheckCircleOutlined />;
        else return <SendOutlined />
    }

    const onFinish = (values) => {
        console.log("uia");
        if (!canReport) {
            messageApi.open({
                type: "error",
                content: "Không thể gửi! Ngoài thời gian gửi báo cáo tiến độ.",
            });
            return;
        }
        messageApi.open({
            type: "loading",
            content: "Đang gửi",
            duration: "2.5"
        }).then(() => message.success("Gửi báo cáo tiến độ đồ án thành công"));
        setStatus("loading");

        setTimeout(() => {
            setStatus("done");

            setTimeout(() => {
                setStatus("idle")
            }, 100000000);
        }, 2000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("aiu");
        if (!canReport) {
            messageApi.open({
                type: "error",
                content: "Không thể gửi! Ngoài thời gian gửi báo cáo tiến độ.",
            });
            return;
        }
        messageApi.open({
            type: "error",
            content: "Không thể gửi! Vui lòng điền đầy đủ thông tin.",
        });
    };

    const alertCanReport = (canReport) => {
        if (!canReport) {
            return <>
                <Alert
                    message="Ngoài thời gian nộp"
                    type="error"
                    showIcon
                    style={{ marginBottom: "16px" }}
                />
            </>
        }
        return <>
            <Alert
                message={<Typography.Text>Trong thời gian gửi báo cáo: {period}</Typography.Text>}
                type="warning"
                showIcon
                style={{ marginBottom: "16px" }}
            />
        </>
    }

    // marginBottom: "16px", borderBottom: "1px solid var(--active-color)"

    return <>
        {contextHolder}
        <Typography.Title level={4} style={{ fontWeight: "bold" }}>Báo cáo tiến độ đồ án</Typography.Title>
        <Card>
            <Steps
                size="small"
                style={{
                    paddingBottom: 16
                }}
                items={[
                    {
                        title: "Đăng ký",
                        status: "finish",
                        description: "12/4 - 30/4/2025",
                        icon: <FormOutlined />,
                    },
                    {
                        title: "Báo cáo",
                        status: "proccess",
                        description: "15/5 - 30/6/2025",
                        icon: <LoadingOutlined />,
                    },
                    {
                        title: "Nộp tệp",
                        status: "wait",
                        description: "12/7 - 30/7/2025",
                        icon: <FileDoneOutlined />,
                    },
                ]}
            />

            {alertCanReport(canReport)}

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

            <Card title="Thông tin đồ án" style={{ marginBottom: "16px", border: "2px solid var(--active-color)" }}>

                <Typography.Paragraph>
                    <b>1. Ngành: </b>Khoa học máy tính
                </Typography.Paragraph>

                <Typography.Paragraph>
                    <b>2. Đợt: </b>Đợt 2 HK2 24-25
                </Typography.Paragraph>

                <Typography.Paragraph>
                    <b>3. Giảng viên hướng dẫn: </b>Giảng viên 2
                </Typography.Paragraph>

                <Typography.Paragraph
                    ellipsis={{
                        rows: 1,
                        expandable: true,
                        symbol: "xem thêm",
                    }}
                >
                    <b>4. Tên đồ án: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, debitis nihil? Fugiat harum cum nobis accusantium temporibus at molestiae fugit quasi expedita, neque omnis id autem eaque dolor quas labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe illo corrupti quo dolorem autem animi, voluptatem illum consequuntur vel, vero repellat molestiae eos. Recusandae, necessitatibus? Placeat voluptatem sint aliquid!
                </Typography.Paragraph>

                <Typography.Paragraph
                    ellipsis={{
                        rows: 1,
                        expandable: true,
                        symbol: "xem thêm",

                    }}
                >
                    <b>5. Từ khoá: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, debitis nihil? Fugiat harum cum nobis accusantium temporibus at molestiae fugit quasi expedita, neque omnis id autem eaque dolor quas labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe illo corrupti quo dolorem autem animi, voluptatem illum consequuntur vel, vero repellat molestiae eos. Recusandae, necessitatibus? Placeat voluptatem sint aliquid!
                </Typography.Paragraph>
                <Typography.Paragraph
                    ellipsis={{
                        rows: 1,
                        expandable: true,
                        symbol: "xem thêm",

                    }}
                >
                    <b>6. Mô tả: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, debitis nihil? Fugiat harum cum nobis accusantium temporibus at molestiae fugit quasi expedita, neque omnis id autem eaque dolor quas labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe illo corrupti quo dolorem autem animi, voluptatem illum consequuntur vel, vero repellat molestiae eos. Recusandae, necessitatibus? Placeat voluptatem sint aliquid!
                </Typography.Paragraph>

                <Typography.Paragraph
                    ellipsis={{
                        rows: 1,
                        expandable: true,
                        symbol: "xem thêm",

                    }}
                >
                    <b>7. những vấn đề đang gặp: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, debitis nihil? Fugiat harum cum nobis accusantium temporibus at molestiae fugit quasi expedita, neque omnis id autem eaque dolor quas labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe illo corrupti quo dolorem autem animi, voluptatem illum consequuntur vel, vero repellat molestiae eos. Recusandae, necessitatibus? Placeat voluptatem sint aliquid!
                </Typography.Paragraph>
            </Card>

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
                    disabled={!canReport}
                >

                    <div className="textarea-container">
                        <Form.Item
                            label="Sơ lược"
                            name="brief"
                            rules={[{ required: true, message: "Cần nhập sơ lược" }]}
                            className="form-item-textarea"
                        >
                            <TextArea className="text-input" placeholder="Nhập sơ lược" />
                        </Form.Item>

                        <Form.Item
                            label="Khó khăn"
                            name="difficulty"
                            rules={[{ required: true, message: "Cần nhập dự kiến" }]}
                            className="form-item-textarea"
                        >
                            <TextArea className="text-input" placeholder="Nhập dự kiến" />
                        </Form.Item>

                        <Form.Item
                            label="Dự kiến"
                            name="expect"
                            rules={[{ required: true, message: "Cần nhập những dự kiến" }]}
                            className="form-item-textarea"
                        >
                            <TextArea className="text-input" placeholder="Nhập những vấn đề đang gặp" />
                        </Form.Item>

                    </div>

                    <div className="button-link-container">
                        <Form.Item
                            label="Liên kết"
                            name="link"
                            rules={[{ required: true, message: "Cần nhập liên kết" }]}
                            className="form-item-input"
                        >
                            <Input className="text-input" placeholder="Nhập đường link" />
                        </Form.Item>

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
                                    <Button className="submit-button" type="primary" htmlType="submit" loading={status === "loading"} icon={changeIcon()}>
                                        Gửi
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

export default ProgressReport