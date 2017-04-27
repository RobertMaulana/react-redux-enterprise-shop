import React from 'react';
import { Row, Col, Card } from 'antd';

const HeroApp = () => {
  return (
      <div style={{padding: 10}}>
        <Card title="Popular Burger" extra={<a href="#">More</a>}>
          <Row gutter={16}>
            <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src="http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-7542/kicfileasset-105231_msf_borderspecialburger_3.jpg" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
            </Col>
            <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src="http://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps824_GIT2919402B01_04_1bC_RMS.jpg" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
            </Col>
            <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src="http://www.redrobinpa.com/wp-content/uploads/2016/08/Tavern-Double-Burger-1-300x300.jpg" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
            </Col>
            <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src="http://images.meredith.com/content/dam/bhg/Images/recipe/42/R148769.jpg.rendition.largest.ss.jpg" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
            </Col>
            <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src="http://blog.sousvidesupreme.com/wp-content/uploads/2013/05/SVBurgerSquare.jpg" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
            </Col>
            <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
                <Card style={{ width: 180 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src="http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
            </Col>
          </Row>
        </Card>
      </div>
  )
}

export default HeroApp
