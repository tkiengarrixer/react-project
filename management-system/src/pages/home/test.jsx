import {
    Typography,
    Avatar,
    Card,
    Row,
    Col,
    Space,
    List,
    Badge,
    Progress,
    Divider
  } from "antd";
  import {
    FileTextOutlined,
    BellOutlined,
    SettingOutlined
  } from "@ant-design/icons";
  import logo from "../../assets/ptit-logo.png";
  
  const { Title, Text } = Typography;
  
  const notifications = [
    { title: "Khai giảng học kỳ mới", date: "15/04/2025" },
    { title: "Lịch thi giữa kỳ", date: "12/04/2025" },
    { title: "Thông báo nộp đồ án", date: "10/04/2025" },
    { title: "Cập nhật hồ sơ sinh viên", date: "08/04/2025" },
    { title: "Mở đăng ký học phần", date: "05/04/2025" }
  ];
  
  function Home() {
    const studentName = "Trần Đào Trung Kiên";
    const studentId = "B23DCKH068";
  
    return (
      <>
        <Title level={4} style={{ fontWeight: "bold" }}>
          👋 Xin chào, {studentName}!
        </Title>
  
        <Card style={{ marginBottom: 24 }}>
          <Space size="large">
            <Avatar src={logo} size={100} shape="square" />
            <div>
              <Text strong>Họ tên:</Text> {studentName} <br />
              <Text strong>Mã sinh viên:</Text> {studentId} <br />
              <Text strong>Ngành:</Text> Khoa học máy tính <br />
            </div>
          </Space>
        </Card>
  
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={8}>
            <Card
              title="Tiến độ đồ án"
              bordered={false}
              style={{ background: "#f0f5ff" }}
            >
              <Space direction="vertical">
                <Text>Báo cáo tiến độ: 80%</Text>
                <Progress percent={80} status="active" />
              </Space>
            </Card>
          </Col>
  
          <Col xs={24} md={12} lg={8}>
            <Card
              title="Thông báo mới"
              bordered={false}
              style={{ background: "#fff7e6" }}
            >
              <List
                size="small"
                dataSource={notifications}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<BellOutlined style={{ color: "#faad14" }} />}
                      title={item.title}
                      description={`Ngày: ${item.date}`}
                    />
                  </List.Item>
                )}
                style={{ maxHeight: 180, overflowY: "auto" }}
              />
            </Card>
          </Col>
  
          <Col xs={24} lg={8}>
            <Card
              title="Cài đặt hệ thống"
              bordered={false}
              style={{ background: "#f6ffed" }}
            >
              <Space direction="vertical">
                <Badge status="success" text="Chế độ tối: Đang tắt" />
                <Badge status="processing" text="Ngôn ngữ: Tiếng Việt" />
                <Divider style={{ margin: "8px 0" }} />
                <SettingOutlined /> Cấu hình cơ bản đã hoàn tất
              </Space>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
  
  export default Home;
  