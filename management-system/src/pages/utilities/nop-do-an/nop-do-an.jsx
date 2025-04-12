import { Typography, Space, Form, Button, Tooltip, message, Alert, Upload, Card, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import "./nop-do-an.css";

// Chú ý: <></> là React Fragment, dùng thay cho <div></div> khi return để tránh lồng nhiều div
function RegisterProject() {
    const studentName = "Trần Đào Trung Kiên";
    const studentId = "B23DCKH068";
    const studentClass = "D23CQKH02-B";
    const canSubmit = false;
    // const [canSubmit, setcanSubmit] = useState(true);
    // const [type, setType] = useState("success");
    const period = "12/4/2025 - 20/4/2025"

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    // const [fileList, setFileList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    // const showMessage = (messageType, content) => {
    //     messageApi.open({
    //         type: messageType,
    //         content,
    //         duration: 10,
    //     });
    // }

    const onFinish = (values) => {
        console.log("uia");
        if (!canSubmit) {
            messageApi.open({
                type: "error",
                content: "Đăng ký không thành công! Ngoài thời gian đăng ký.",
            });
            return;
        }
        if (!values.file || values.file.length === 0) {
            messageApi.open({
                type: "error",
                content: "Đăng ký không thành công! Bạn chưa tải tệp lên.",
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
        if (!canSubmit) {
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

    const alertcanSubmit = (canSubmit) => {
        if (!canSubmit) {
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
                message={<Typography.Text>Trong thời gian nộp: {period}</Typography.Text>}
                type="warning"
                showIcon
                style={{ marginBottom: "16px" }}
            />
        </>
    }

    // const beforeUpload = (file) => {
    //     if (fileList.length >= 1) {
    //         setModalVisible(true);
    //         return Upload.LIST_IGNORE;
    //     }
    //     setFileList([file]);
    //     return false;
    // }

    const onChange = (info) => {
        const { status } = info.file;
        if (status === "uploading") return;
        if (status === "done") message.success(`Đã tải lên xong tệp ${info.file.name}`)
        else if (status === "error") message.error(`Không thể tải lên tệp ${info.file.name}`)
    }

    const properties = {
        name: "file",
        multiple: false,
        maxCount: 1,
        beforeUpload: (file) => {
            return false;
        },
    };

    return <>
        {contextHolder}
        <Typography.Title level={4} style={{ fontWeight: "bold", marginTop: "0", marginBottom: "16px", borderBottom: "1px solid var(--active-color)" }}>Nộp tệp đồ án tốt nghiệp</Typography.Title>

        {alertcanSubmit(canSubmit)}

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
                <b>7. Mong muốn: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, debitis nihil? Fugiat harum cum nobis accusantium temporibus at molestiae fugit quasi expedita, neque omnis id autem eaque dolor quas labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe illo corrupti quo dolorem autem animi, voluptatem illum consequuntur vel, vero repellat molestiae eos. Recusandae, necessitatibus? Placeat voluptatem sint aliquid!
            </Typography.Paragraph>
        </Card>

        <div className="form-container">
            <Form
                form={form}
                name="upload-form"
                layout="vertical"
                style={{
                    width: "100%"
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                disabled={!canSubmit}
            >

                <div className="upload-container">
                    <Form.Item
                        label="Tệp đồ án"
                        name="file"
                        rules={[{ required: true, message: "Cần tải lên tệp" }]}
                        valuePropName="fileList"
                        getValueFromEvent={(e) => {
                            if (Array.isArray(e)) return e;
                            return e?.fileList;
                        }}
                        className="form-item-upload"
                    >
                        <Tooltip title="Nộp tệp đồ án tại đây">
                            <Upload.Dragger
                                name="file"
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                onChange={onChange}
                                className="dragger"
                                style={{
                                    width: "100%",
                                }}
                            >
                                <p className="upload-icon">
                                    <UploadOutlined />
                                </p>
                                <p className="upload-text">Nhấn hoặc kéo tệp vào đây để tải lên</p>
                                <p className="upload-hint">Chỉ hỗ trợ tải lên một tệp</p>
                            </Upload.Dragger>
                        </Tooltip>
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
                        <Tooltip title="Nộp tệp đồ án, chú ý phải điền và chọn đầy đủ thông tin">
                            <Form.Item>
                                <Button className="submit-button" type="primary" htmlType="submit">
                                    Nộp
                                </Button>
                            </Form.Item>
                        </Tooltip>

                    </Space>
                </div>
            </Form>
        </div >

        <Modal
            title="Lỗi!"
            open={modalVisible}
            centered
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            okText="Đồng ý"
            cancelText="Huỷ"
        >
            <p>Bạn chỉ được phép tải lên tối đa 1 tệp</p>

        </Modal>
    </>
}

export default RegisterProject