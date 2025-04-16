import {
    Typography,
    Segmented,
    ConfigProvider,
    Avatar,
    Space,
    Descriptions,
    Card,
    Form,
    Input,
    Button,
    message,
    Select
} from "antd";
import { useState } from "react";
import logo from "../../assets/ptit-logo.png";

function Info() {
    const [tab, setTab] = useState("view");
    const [form] = Form.useForm();

    const [student, setStudent] = useState({
        name: "Trần Đào Trung Kiên",
        id: "B23DCKH068",
        class: "D23CQKH02-B",
        major: "Khoa học máy tính",
        subMajor: "Không",
        faculty: "Khoa học máy tính",
        gender: "Nam",
        birth: "05/11/2005",
        phone: "0329838056",
        email: "kientdt.b23kh068@stu.ptit.edu.vn"
    });

    const items = [
        { key: "1", label: "Họ và tên", children: student.name },
        { key: "2", label: "Mã sinh viên", children: student.id },
        { key: "3", label: "Lớp hành chính", children: student.class },
        { key: "4", label: "Ngành", children: student.major },
        { key: "5", label: "Chuyên ngành", children: student.subMajor },
        { key: "6", label: "Khoa", children: student.faculty },
        { key: "7", label: "Giới tính", children: student.gender },
        { key: "8", label: "Ngày sinh", children: student.birth },
        { key: "9", label: "Số điện thoại", children: student.phone },
        { key: "10", label: "Địa chỉ email", children: student.email }
    ];

    const onFinish = (values) => {
        setStudent(values);
        message.success("Cập nhật thông tin thành công!");
        setTab("view");
    };

    return (
        <>
            <Typography.Title level={4} style={{ fontWeight: "bold" }}>
                Thông tin cá nhân
            </Typography.Title>

            <ConfigProvider
                theme={{
                    components: {
                        Segmented: {
                            itemSelectedBg: "#fcf0ed",
                            itemSelectedColor: "var(--active-color)",
                            trackBg: "white"
                        }
                    }
                }}
            >
                <Segmented
                    block
                    options={[
                        { label: "Thông tin", value: "view" },
                        { label: "Chỉnh sửa thông tin", value: "edit" }
                    ]}
                    value={tab}
                    onChange={setTab}
                    style={{
                        marginBottom: 24,
                        boxShadow: "0 0px 4px rgba(0, 0, 0, 0.15)",
                        width: "350px"
                    }}
                />
            </ConfigProvider>

            {tab === "view" ? (
                <Card>
                    <Space
                        align="start"
                        style={{ flexWrap: "wrap", width: "100%", gap: 24 }}
                    >
                        <Avatar src={logo} shape="square" size={150} />
                        <Descriptions
                            title="Thông tin sinh viên"
                            bordered
                            items={items}
                            column={{ xs: 1, sm: 1, md: 2, lg: 3 }}
                            style={{ flex: 1, minWidth: 280 }}
                        />
                    </Space>
                </Card>
            ) : (
                <Card title="Chỉnh sửa thông tin">
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={student}
                        onFinish={onFinish}
                    >
                        <Form.Item label="Họ và tên" name="name">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Mã sinh viên" name="id">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Lớp hành chính" name="class">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Ngành" name="major">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Chuyên ngành" name="subMajor">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Khoa" name="faculty">
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label="Giới tính" name="gender" rules={[{ required: true }]}>
                            <Select className="select-box"
                                showSearch
                                placeholder="Chọn giảng viên hướng dẫn"
                                optionFilterProp="label"
                                name="label"

                                options={[
                                    {
                                        value: "Nam",
                                        label: "Nam",
                                    },
                                    {
                                        value: "Nữ",
                                        label: "Nữ"
                                    },
                                    {
                                        value: "Không",
                                        label: "Bí mật"
                                    }
                                ]}
                            >
                            </Select>
                        </Form.Item>
                        <Form.Item label="Ngày sinh" name="birth" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ type: "email", required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button onClick={() => setTab("view")}>Hủy</Button>
                                <Button type="primary" htmlType="submit">
                                    Cập nhật
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Card>
            )}
        </>
    );
}

export default Info;
