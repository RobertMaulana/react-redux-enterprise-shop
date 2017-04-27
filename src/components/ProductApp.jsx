import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct, deleteProduct } from '../actions';
import { Row, Col, Card, Icon, Modal, Input, Popconfirm, message } from 'antd';

let styles = {
  itemProducts: {
    paddingTop: 10,
    cursor: 'pointer'
  },
  productSpace: {
    padding: 10
  },
  cardStyle: {
    width: 180,
  },
  imgStyle: {
    width: '100%'
  }
}

class ProductApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      id: 0,
      title:'',
      img: '',
      desc: ''
    }
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
    this.props.updateProduct(this.state)
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
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  onChangeImg(e) {
    this.setState({ img: e.target.value });
  }
  onChangeDesc(e) {
    this.setState({ desc: e.target.value });
  }
  detailProduct(){
    alert("detail")
  }
  editProduct(products){
    this.setState({
      visible: true,
      id: products.id,
      title: products.title,
      img: products.img,
      desc: products.desc
    });
  }

  confirm(id) {
    this.props.deleteProduct(id)
    message.success('Product have been remove!');
  }

  render(){
    const { title, img, desc } = this.state;
    const suffix = title ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div style={styles.productSpace}>
        <Card title="Popular Burger" extra={<a href="#">More</a>}>
          <Row gutter={16}>
            {this.props.product.products.map((products) => {
              return (
                <Col key={products.id} className="gutter-row" span={4} style={styles.itemProducts}>
                    <Card bodyStyle={{ padding: 0 }} style={styles.cardStyle}>
                      <div className="custom-image">
                        <img alt="img" src={products.img} style={styles.imgStyle}/>
                      </div>
                      <div className="custom-card">
                        <h3>{products.title}</h3>
                        <p>{products.desc}</p>
                        <a onClick={this.editProduct.bind(this, products)}><Icon type="edit" /></a>
                        <Popconfirm title="Are you sure delete this product?" onConfirm={this.confirm.bind(this, products.id)} okText="Yes" cancelText="No">
                          <a href="#"><Icon type="delete" /></a>
                        </Popconfirm>
                      </div>
                    </Card>
                </Col>
              )
            })}
          </Row>
        </Card>
        <Modal title="Edit Product"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <Input
            prefix={<Icon type="right" />}
            suffix={suffix}
            name="title"
            value={title}
            onChange={this.onChangeTitle.bind(this)}
          />
          <Input
            prefix={<Icon type="right" />}
            suffix={suffix}
            name="img"
            value={img}
            onChange={this.onChangeImg.bind(this)}
            style={{paddingTop: '5'}}
          />
          <Input
            prefix={<Icon type="right" />}
            suffix={suffix}
            name="desc"
            value={desc}
            onChange={this.onChangeDesc.bind(this)}
            style={{paddingTop: '5'}}
          />
        </Modal>
      </div>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    product: state
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    updateProduct: product => dispatch(updateProduct(product)),
    deleteProduct: id => dispatch(deleteProduct(id))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ProductApp)
