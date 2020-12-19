import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, SafetyOutlined } from "@ant-design/icons";

class LoginForm extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }

  formRef = React.createRef();
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  register = () => {
    this.props.switchShowBox('register')
    setTimeout(() => {
      this.formRef.current.resetFields();
    }, 500)
  }

  render() {
    return (
      <div className={this.props.className}>
        <h3 className="title">管理员登录</h3>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={this.onFinish}
          ref={this.formRef}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请填写用户名",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请填写密码",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请填写验证码",
              },
            ]}
          >
            <Input
              prefix={<SafetyOutlined className="site-form-item-icon" />}
              placeholder="验证码"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item>
            <div className="bottom">
              <Button
                type="primary"
                htmlType="submit"
                className="loginBtn"
              >
                登录
              </Button>
              <span className="registerBtn" onClick={this.register}>注册</span>
            </div>
          </Form.Item>
        </Form>
        <p className="footer">欢迎登陆后台管理系统</p>
      </div>
    );
  }
}

export default LoginForm;
