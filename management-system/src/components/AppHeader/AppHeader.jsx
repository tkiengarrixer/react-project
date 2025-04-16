import { Space, Image, Badge, Drawer, Button, Tooltip, Modal, Card } from "antd";
import { useState } from "react";
import { BellFilled } from "@ant-design/icons";
import logo from "../../assets/ptit-logo.png";
import "./AppHeader.css";

function AppHeader() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const showDrawer = () => {
        setOpenDrawer(true);
    };
    const onClose = () => {
        setOpenDrawer(false);
    };

    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return <div className="AppHeader">
        <Space>
            <Image className="logo" preview={false} width={50} height={50} src={logo}></Image>
            <div className="heading-logo">
                <div className="faculty-name" >Khoa Kỹ thuật Điện tử 1</div>
                <div className="system-name" >Hệ thống quản trị tài liệu hành chính</div>
            </div>
        </Space>

        <Space>
            <Tooltip title="Thông báo">
                <Button type="primary" onClick={showDrawer} style={{ backgroundColor: "var(--active-color)" }}>
                    <Badge count={20} size="small">
                        <BellFilled className="bell-icon" />
                    </Badge>
                </Button>
            </Tooltip>

        </Space>
        <Drawer title="Thông báo" onClose={onClose} open={openDrawer}>
            <Card hoverable title="Thông báo 1" onClick={showModal}>
                <p>Lorem ipsum dolor, sit amet consec</p>
            </Card>
            <Modal
                title="Thông báo 1"
                open={modalVisible}
                onCancel={hideModal}
                footer={null}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur dicta numquam omnis voluptate corrupti, quaerat amet impedit reprehenderit dolorem nam ad id. Dolore facilis quibusdam obcaecati? Repudiandae, minus pariatur.
            </Modal>
        </Drawer>
    </div >
}

export default AppHeader