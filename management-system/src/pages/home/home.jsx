import { Typography, Avatar, Card, Row, Col, Space, List, Badge, Progress, Divider } from "antd";

import {
    FileTextOutlined,
    BellOutlined,
    SettingOutlined,
    ScheduleOutlined,
    FieldTimeOutlined
} from "@ant-design/icons";
import logo from "../../assets/ptit-logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const notifications = [
    { title: "Thông báo 1", date: "15/04/2025" },
    { title: "Thông báo 2", date: "12/04/2025" },
    { title: "Thông báo 3", date: "10/04/2025" },
    { title: "Thông báo 4", date: "08/04/2025" },
    { title: "Thông báo 5", date: "05/04/2025" }
];

function Home() {
    const studentName = "Trần Đào Trung Kiên";
    const studentId = "B23DCKH068";
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Title level={4} style={{ fontWeight: "bold" }}>
                Xin chào, {studentName}!
            </Title>

            <Card style={{ marginBottom: 24 }}>
                <Space size="large">
                    <Avatar src={logo} size={100} shape="circle" />
                    <div>
                        <Text strong>Họ tên:</Text> {studentName} <br />
                        <Text strong>Mã sinh viên:</Text> {studentId} <br />
                        <Text strong>Ngành:</Text> Khoa học máy tính <br />
                    </div>
                </Space>
            </Card>

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12} lg={8}>
                    <Space direction="vertical" size={16} style={{ width: "100%" }}>
                        <Card
                            title={
                                <Space>
                                    <ScheduleOutlined />
                                    Tiến độ đồ án
                                </Space>
                            }

                            hoverable
                            onClick={() => navigate("/tien-ich/bao-cao-tien-do")}
                            style={{ background: "#f0f5ff", cursor: "pointer" }}
                        >
                            <Space direction="vertical">
                                <Text>Báo cáo tiến độ: 80%</Text>
                                <Progress percent={80} status="active" />
                            </Space>
                        </Card>

                        <Card
                            title={
                                <Space>
                                    <FieldTimeOutlined />
                                    Khung thời gian chính
                                </Space>
                            }

                            hoverable
                            onClick={() => navigate("/tien-ich/bao-cao-tien-do")}
                            style={{ background: "#00ff0033", cursor: "pointer" }}
                        >
                            <Space direction="vertical">
                                <Text>Đăng ký đồ án: dd/mm/yyyy</Text>
                                <Text>Báo cáo tiến độ: dd/mm/yyyy</Text>
                                <Text>Nộp file đồ án: dd/mm/yyyy</Text>
                            </Space>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} md={12} lg={8}>
                    <Card
                        title={
                            <Space>
                                <BellOutlined />
                                Thông báo mới
                            </Space>
                        }

                        hoverable
                        onClick={() => navigate("/thong-bao")}
                        style={{ background: "#fff7e6", cursor: "pointer", height: "100%" }}
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
                            style={{ maxHeight: 250, overflowY: "auto" }}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={8}>
                    <Space direction="vertical" size={16} style={{ width: "100%" }}>
                        <Card
                            title={
                                <Space>
                                    <SettingOutlined />
                                    Cài đặt chung
                                </Space>
                            }

                            hoverable
                            onClick={() => navigate("/cai-dat")}
                            style={{ background: "#fcf0ed", cursor: "pointer" }}
                        >
                            <Space direction="vertical">
                                <Badge status="success" text="Chế độ tối: Đang tắt" />
                                <Badge status="processing" text="Ngôn ngữ: Tiếng Việt" />
                            </Space>
                        </Card>

                        <Card
                            title="Thời gian hiện tại"
                            style={{ background: "#e6fffb", height: "100%" }}
                        >
                            <Space direction="vertical">
                                <Text strong>Ngày: {currentTime.toLocaleDateString("vi-VN")}</Text>
                                <Text strong>Giờ: {currentTime.toLocaleTimeString("vi-VN")}</Text>
                            </Space>
                        </Card>
                    </Space>
                </Col>
            </Row >
        </>
    );
}

export default Home;
