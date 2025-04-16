import { Typography, Select, Space, Form, Input, Button, Tooltip, message, Alert, Upload, Card, Modal } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { InboxOutlined } from "@ant-design/icons";
import "./nop-do-an.css";

function RegisterProject() {
  const studentName = "Trần Đào Trung Kiên";
  const studentId = "B23DCKH068";
  const studentClass = "D23CQKH02-B";
  const [canRegister, setCanRegister] = useState(true);
  const [type, setType] = useState("success");
  const period = "12/4/2025 - 20/4/2025";
  const [expanded, setExpanded] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // State cho Modal

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    console.log("uia");
    if (!canRegister) {
      setType("error");
      messageApi.open({
        type: "error",
        content: "Đăng ký không thành công! Ngoài thời gian đăng ký.",
      });
      return;
    }
    setType("loading");
    messageApi
      .open({
        type: "loading",
        content: "Đang đăng ký",
        duration: 2.5,
      })
      .then(() => {
        setType("success");
        message.success("Đăng ký đồ án thành công", 5);
        setFileList([]);
        form.resetFields();
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("aiu");
    if (!canRegister) {
      setType("error");
      messageApi.open({
        type: "error",
        content: "Đăng ký không thành công! Ngoài thời gian đăng ký.",
      });
      return;
    }
    setType("error");
    messageApi.open({
      type: "error",
      content: "Đăng ký không thành công! Vui lòng điền đầy đủ thông tin.",
      duration: 10,
    });
  };

  const alertCanRegister = (canRegister) => {
    if (!canRegister) {
      return (
        <Alert
          message="Ngoài thời gian nộp"
          type="error"
          showIcon
          style={{ marginBottom: "16px" }}
        />
      );
    }
    return (
      <Alert
        message={<Typography.Text>Trong thời gian nộp: {period}</Typography.Text>}
        type="warning"
        showIcon
        style={{ marginBottom: "16px" }}
      />
    );
  };

  // Xử lý trước khi upload
  const beforeUpload = (file) => {
    if (fileList.length >= 1) {
      setModalVisible(true); // Hiển thị Modal khi vượt quá 1 file
      return Upload.LIST_IGNORE; // Chặn file thứ 2
    }
    setFileList([file]);
    return false; // Ngăn upload tự động
  };

  return (
    <>
      {contextHolder}
      <Typography.Title
        level={4}
        style={{ fontWeight: "bold", marginTop: "0", marginBottom: "16px", borderBottom: "1px solid var(--active-color)" }}
      >
        Nộp tệp đồ án tốt nghiệp
      </Typography.Title>

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

      <Card title="Thông tin đồ án" style={{ marginBottom: "16px" }}>
        <Typography.Paragraph
          ellipsis={{
            rows: 1,
            expandable: true,
            symbol: expanded ? "Thu gọn" : "Xem thêm",
            onExpand: () => setExpanded(true),
            onEllipsis: () => setExpanded(false),
          }}
        >
          <b>Tên đồ án: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, debitis nihil? Fugiat harum cum
          nobis accusantium temporibus at molestiae fugit quasi expedita, neque omnis id autem eaque dolor quas labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography.Paragraph>
      </Card>

      <div className="form-container">
        <Form
          form={form}
          name="basic"
          layout="vertical"
          style={{ width: "100%" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          disabled={!canRegister}
        >
          <div className="upload-container">
            <Form.Item
              label="Tệp đồ án"
              name="upload"
              rules={[{ required: true, message: "Cần tải lên tệp" }]}
              className="form-item-upload"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            >
              <Tooltip title="Nộp tệp đồ án tại đây">
                <Upload.Dragger
                  name="file"
                  multiple={false}
                  fileList={fileList}
                  beforeUpload={beforeUpload}
                  onChange={({ fileList: newFileList }) => setFileList(newFileList)}
                  onRemove={() => setFileList([])}
                >
                  <p className="upload-icon">
                    <InboxOutlined />
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
      </div>

      {/* Modal hiển thị lỗi */}
      <Modal
        title="Lỗi tải lên"
        open={modalVisible}
        onOk={() => setModalVisible(false)} // Đóng Modal khi nhấn OK
        onCancel={() => setModalVisible(false)} // Đóng Modal khi nhấn Cancel
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn chỉ được phép tải lên tối đa 1 file!</p>
      </Modal>
    </>
  );
}

export default RegisterProject;