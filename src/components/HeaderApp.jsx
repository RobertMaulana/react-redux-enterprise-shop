import React, { Component } from 'react'
import { Layout, Menu, Modal, Input, Icon } from 'antd';
const { Header } = Layout;

class HeaderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  state = {
    ModalText: 'Content of the modal dialog',
    visible: false,
  }
  modalSignin = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  render (){
    const { username, password } = this.state;
    const suffix = username ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
        <Header>
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" className="logo"><h1>Burger Kong</h1></Menu.Item>
            <Menu.Item key="2" className="auth-user">Signup</Menu.Item>
            <Menu.Item key="3" className="auth-user"><a onClick={this.modalSignin.bind(this)}>Signin</a></Menu.Item>
            <Modal title="Signin"
              visible={this.state.visible}
              onOk={this.handleOk}
              confirmLoading={this.state.confirmLoading}
              onCancel={this.handleCancel}
            >
              <p>{this.state.ModalText}</p>
              <Input
                placeholder="Enter your userName"
                prefix={<Icon type="user" />}
                suffix={suffix}
                value={username}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
              />
              <Input
                type="password"
                placeholder="Enter your password"
                prefix={<Icon type="lock" />}
                suffix={suffix}
                value={password}
                onChange={this.onChangePassword}
                ref={node => this.userNameInput = node}
                style={{paddingTop: '5'}}
              />
            </Modal>
          </Menu>
        </Header>
      </div>
    )
  }
}

export default HeaderApp
