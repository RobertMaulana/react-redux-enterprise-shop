import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, addProduct } from '../actions';
import { Layout, Menu, Modal, Input, Icon } from 'antd';
const { Header } = Layout;

class HeaderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      title: '',
      img: '',
      desc: '',
      visible: false,
      visibleProduct: false,
      confirmLoading: false
    };
  }
  modalSignin() {
    this.setState({
      visible: true,
    });
  }
  modalAddProduct() {
    this.setState({
      visibleProduct: true,
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
  handleOkProduct() {
    this.setState({
      confirmLoading: true,
    });
    this.props.addProduct(this.state)
    setTimeout(() => {
      this.setState({
        visibleProduct: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancelProduct() {
    this.setState({ visibleProduct: false });
  }
  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  onChangeImg(e) {
    this.setState({ img: e.target.value });
  }
  onChangeDesc(e) {
    this.setState({ desc: e.target.value });
  }
  render() {
    const { username, password, title, img, desc } = this.state;
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
            <Menu.Item key="5"><a onClick={this.modalAddProduct.bind(this)}>Add Burger</a></Menu.Item>
            <Menu.Item key="3" className="auth-user">Signup</Menu.Item>
            <Menu.Item key="4" className="auth-user"><a onClick={this.modalSignin.bind(this)}>Signin</a></Menu.Item>
            <Menu.Item key="2" className="auth-user"><Icon type="shopping-cart" /></Menu.Item>
            <Modal title="Signin"
              visible={this.state.visible}
              onOk={this.handleOk.bind(this)}
              confirmLoading={this.state.confirmLoading}
              onCancel={this.handleCancel.bind(this)}
            >
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

            <Modal title="Add Product"
              visible={this.state.visibleProduct}
              onOk={this.handleOkProduct.bind(this)}
              confirmLoading={this.state.confirmLoading}
              onCancel={this.handleCancelProduct.bind(this)}
            >
              <Input
                placeholder="Title"
                prefix={<Icon type="right" />}
                suffix={suffix}
                name="title"
                value={title}
                onChange={this.onChangeTitle.bind(this)}
              />
              <Input
                placeholder="Image URL"
                prefix={<Icon type="right" />}
                suffix={suffix}
                name="img"
                value={img}
                onChange={this.onChangeImg.bind(this)}
                style={{paddingTop: '5'}}
              />
              <Input
                placeholder="Description"
                prefix={<Icon type="right" />}
                suffix={suffix}
                name="desc"
                value={desc}
                onChange={this.onChangeDesc.bind(this)}
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
    signin: user => dispatch(signin(user)),
    addProduct: product => dispatch(addProduct(product)),
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(HeaderApp)
