import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';

class ProductApp extends Component{
  render(){
    return (
        <div style={{padding: 10}}>
          <Card title="Popular Burger" extra={<a href="#">More</a>}>
            <Row gutter={16}>
              {this.props.product.products.map((products) => {
                return (
                  <Col key={products.id} className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                      <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                          <img alt="example" width="100%" src={products.img} />
                        </div>
                        <div className="custom-card">
                          <h3>{products.title}</h3>
                          <p>{products.desc}</p>
                        </div>
                      </Card>
                  </Col>
                )
              })}
            </Row>
          </Card>
        </div>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    product: state
  }
}

// const mapsDispatchToProps = (dispatch) => {
//   return {
//     signin: user => dispatch(signin(user))
//   }
// }

// export default connect(mapsStateToProps, mapsDispatchToProps)(ProductApp)
export default connect(mapsStateToProps, null)(ProductApp)
