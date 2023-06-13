import React from 'react'
import { Card, Col, Row } from 'antd';
import { Input, Space } from 'antd';
import { Progress } from 'antd';
import { Avatar } from 'antd';
import { Button, Timeline } from 'antd';
import { useState } from 'react';
import { Table, Tag } from 'antd';
import { Cascader } from 'antd';

import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

const { Search } = Input;

const onSearch = (value) => console.log(value);

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 // return (
    //                 //     <Tag color={color} key={tag}>
    //                 //         {tag.toUpperCase()}
    //                 //     </Tag>
    //                 // );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                {/* <a>Delete</a> */}
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',

    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',

    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',

    },
    {
        key: '4',
        name: 'Tae Kim',
        age: 27,
        address: 'Sydney No. 1 Lake Park',

    },
];
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const onChange = (value) => {
    console.log(value);
};

function AntdDemo() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [reverse, setReverse] = useState(false);
    const handleClick = () => {
        setReverse(!reverse);
    };
    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const [gap, setGap] = useState(GapList[0]);
    const changeUser = () => {
        const index = UserList.indexOf(user);
        setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
        setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };
    const changeGap = () => {
        const index = GapList.indexOf(gap);
        setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
    };
    return (
        <>
            <Layout hasSider>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <Layout
                    className="site-layout"
                    style={{
                        marginLeft: 200,
                    }}
                >
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            lineHeight: 0,
                        }}

                    >
                        <Breadcrumb
                            items={[
                                {
                                    title: 'Home',
                                },

                                // {
                                //     title: <a href="">Application List</a>,
                                // },
                                {
                                    title: 'An Application',
                                },
                            ]}
                        />
                        <Space direction="vertical">
                            <Search
                                placeholder="input search text"
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                }}
                            />
                        </Space>

                    </Header>

                    <Content
                        style={{
                            margin: '24px 16px 0',
                            overflow: 'initial',
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                textAlign: 'left',
                                background: colorBgContainer,
                            }}
                        >
                            <Row gutter={50} >
                                <Col >
                                    <Card >
                                        <h1 style={{ color: 'grey', margin: '0', fontSize: '15px' }}> Today's Sale</h1>
                                        <p style={{ fontSize: '40px', margin: "0", fontWeight: 'bolder' }}>$53,000</p>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card>
                                        <h1 style={{ color: 'grey', margin: '0', fontSize: '15px' }}> Today's User</h1>
                                        <p style={{ fontSize: '40px', margin: "0", fontWeight: 'bolder' }}>3,200</p>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card>
                                        <h1 style={{ color: 'grey', margin: '0', fontSize: '15px' }}> New Clients</h1>
                                        <p style={{ fontSize: '40px', margin: "0", fontWeight: 'bolder' }}>+1,200</p>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card>
                                        <h1 style={{ color: 'grey', margin: '0', fontSize: '15px' }}>New Orders</h1>
                                        <p style={{ fontSize: '40px', margin: "0", fontWeight: 'bolder' }}>$13,200</p>

                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '50px' }}>
                                <Col span={14}><Table columns={columns} dataSource={data} /></Col>
                                <Col span={8}>
                                    <div style={{ marginLeft: '40px' }}>
                                        <Timeline
                                            pending="Recording..."
                                            reverse={reverse}
                                            items={[
                                                {
                                                    children: 'Create a services site 2015-09-01',

                                                },
                                                {
                                                    children: 'Solve initial network problems 2015-09-01',
                                                },
                                                {
                                                    children: 'Technical testing 2015-09-01',
                                                },
                                                {
                                                    children: 'Create a services site 2015-09-01'
                                                },
                                                {
                                                    children: 'Solve initial network problems 2015-09-01',
                                                },
                                                {
                                                    children: 'Technical testing 2015-09-01',
                                                },
                                            ]}
                                        />
                                        <Button
                                            type="primary"
                                            style={{
                                                marginTop: 16,
                                            }}
                                            onClick={handleClick}
                                        >
                                            Reverse
                                        </Button>
                                    </div></Col>
                            </Row>
                            <Row style={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Col>
                                    <Space wrap>
                                        <Progress type="dashboard" percent={35} />
                                        <Progress type="dashboard" percent={85} gapDegree={30} />
                                        <Progress type="dashboard" percent={95} gapDegree={30} />
                                        <Progress type="dashboard" percent={70} gapDegree={30} />

                                    </Space>
                                </Col>
                                <Col>
                                    <Card
                                        style={{
                                            width: 300,
                                            margin: '20px',
                                        }}
                                    >
                                        <Avatar
                                            style={{
                                                backgroundColor: color,
                                                verticalAlign: 'middle',
                                            }}
                                            size="large"
                                            gap={gap}
                                        >
                                            {user}
                                        </Avatar>
                                        <Button
                                            size="small"
                                            style={{
                                                margin: '0 16px',
                                                verticalAlign: 'middle',
                                            }}
                                            onClick={changeUser}
                                        >
                                            ChangeUser
                                        </Button>
                                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    </Card>
                                </Col>
                            </Row>
                            Client's Status : <Cascader style={{ marginLeft: '10px', marginRight: '20px' }} options={options} onChange={onChange} placeholder="Please select" />
                            Client's Update : <Cascader style={{ marginLeft: '10px' }} options={options} onChange={onChange} placeholder="Please select" />
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    )
}

export default AntdDemo