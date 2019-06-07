import React from "react";
import { Row, Col } from "antd";
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from "antd";
const FormItem = Form.Item;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      //绑定当前选定的导航栏
      current: "top",
      //是否显示或隐藏
      modalVisible: false,
      //按钮是用于登录还是注册
      action: "login",
      //是否已经登录
      hasLogined: false,
      //用户昵称
      userNickName: "",
      //用户id
      userid: 0
    };
  }
  render() {
    //接受页面的参数
    let { getFieldProps } = this.props.form;
    //通过判断是否登录
    const userShow = this.state.hasLogined ? (
      <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">
          {this.state.userNickName}
        </Button>
        &nbsp;&nbsp;
        <Link target="_blank">
          <Button type="dashed" htmlType="button">
            个人中心
          </Button>
        </Link>
        &nbsp;&nbsp;
      </Menu.Item>
    ) : (
      <Menu.Item key="register" class="register">
        <Icon type="appstore" />注册/登录
      </Menu.Item>
    );
    return (
      <header>
        <Row>
          <Col span={2} />
          <Col span={4}>
            <a href="/" class="logo">
              <img src="./src/images/logo.png" alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore" />
                头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />
                社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />
                国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />
                国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />
                娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />
                体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore" />
                科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore" />
                时尚
              </Menu.Item>
              {userShow}
            </Menu>
          </Col>
          <Col span={2} />
        </Row>
      </header>
    );
  }
}

export default (PCHeader = Form.create({})(PCHeader));
