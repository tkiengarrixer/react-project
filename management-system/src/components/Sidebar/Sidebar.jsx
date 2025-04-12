import { Layout, Menu, Button, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as NewsIcon } from "../../assets/icons/news.svg";
import { ReactComponent as NotificationsIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as UtilitiesIcon } from "../../assets/icons/utilities.svg";
import { ReactComponent as PersonalInfoIcon } from "../../assets/icons/personal_info.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/tune.svg";
import { ReactComponent as BlankIcon } from "../../assets/icons/no_image.svg";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKey(pathName);
    }, [location.pathname]);

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return <ConfigProvider
        theme={{
            token: {
                colorPrimary: "#ffffff",
                colorPrimaryBg: "#BC2626",
                colorBgBase: "#051A53",
                colorTextBase: "black",
                colorBgSolidHover: "#414c6b",
            },
        }}
    >
        <Sider className="Sidebar"
            collapsible
            collapsed={collapsed}
            trigger={null}
            width={250}
            collapsedWidth={60}
        >
            <Menu mode="inline" className="custom-menu" onClick={(item) => {
                navigate(item.key);
            }}
                selectedKeys={selectedKey}
                items={[
                    { icon: <HomeIcon style={{ width: 20, height: 20, fill: "var(--secondary-color)" }} />, label: "Trang chủ", key: "/" },
                    { label: "Tin tức", key: "/tin-tuc", icon: <NewsIcon style={{ width: 20, height: 20, fill: "var(--secondary-color)" }} /> },
                    { label: "Thông báo", key: "/thong-bao", icon: <NotificationsIcon style={{ width: 20, height: 20, fill: "var(--secondary-color)" }} /> },
                    {
                        label: "Tiện ích",
                        icon: <UtilitiesIcon style={{ width: 20, height: 20, fill: "var(--secondary-color)" }} />,
                        children: [
                            { label: "Đăng ký đồ án", key: "/tien-ich/dang-ky-do-an" },
                            { label: "Nộp đồ án", key: "/tien-ich/nop-do-an" },
                            { label: "Báo cáo đồ án", key: "/tien-ich/bao-cao-do-an" },
                            { label: "Đăng ký đề tài NCKH", key: "/tien-ich/dang-ky-nghien-cuu-khoa-hoc" },
                            { label: "Báo cáo đề tài NCKH", key: "/tien-ich/bao-cao-nghien-cuu-khoa-hoc" },
                        ]
                    },
                    { label: "Thông tin cá nhân", key: "/thong-tin-ca-nhan", icon: <PersonalInfoIcon style={{ width: 20, height: 20, fill: "var(--secondary-color)" }} /> },
                    { label: "Cài đặt", key: "/cai-dat", icon: <SettingsIcon style={{ width: 20, height: 20, fill: "var(--secondary-color)" }} /> },

                ]}
            ></Menu>

            <Button
                size="large"
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    position: "absolute",
                    width: "60px",
                    backgroundColor: "var(--main-color)",
                    bottom: "0px",
                    margin: "0",
                    padding: "100",
                    boxShadow: "none"
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
        </Sider >
    </ConfigProvider>
}

export default Sidebar