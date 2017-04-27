import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions';
import { Layout, Menu, Modal, Input, Icon } from 'antd';
const { Header } = Layout;

class HeaderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      visible: false,
      confirmLoading: false,
    };
  }
  modalSignin() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.setState({
      ModalText: '',
      confirmLoading: true,
    });
    this.props.signin(this.state)
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel() {
    this.setState({ visible: false });
  }
  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
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
            <Menu.Item key="3" className="auth-user">Signup</Menu.Item>
            <Menu.Item key="4" className="auth-user"><a onClick={this.modalSignin.bind(this)}>Signin</a></Menu.Item>
            <Menu.Item key="2" className="auth-user"><Icon type="shopping-cart" /></Menu.Item>
            <Modal title="Signin"
              visible={this.state.visible}
              onOk={this.handleOk.bind(this)}
              confirmLoading={this.state.confirmLoading}
              onCancel={this.handleCancel.bind(this)}
            >
              <p>{this.state.ModalText}</p>
              <Input
                placeholder="Enter your userName"
                prefix={<Icon type="user" />}
                suffix={suffix}
                name="username"
                value={username}
                onChange={this.onChangeUserName.bind(this)}
                ref={node => this.userNameInput = node}
              />
              <Input
                type="password"
                placeholder="Enter your password"
                prefix={<Icon type="lock" />}
                suffix={suffix}
                name="password"
                value={password}
                onChange={this.onChangePassword.bind(this)}
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

const mapsStateToProps = (state) => {
  return {
    user: state
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    signin: user => dispatch(signin(user))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(HeaderApp)
