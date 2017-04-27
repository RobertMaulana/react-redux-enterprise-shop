import React from 'react'
import { Row, Col, Card } from 'antd';

const HeroApp = () => {
  return (
    <div>
      <Card>
        <Row gutter={16}>
          <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
          </Col>
          <Col className="gutter-row" span={4} style={{cursor: 'pointer'}}>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default HeroApp
