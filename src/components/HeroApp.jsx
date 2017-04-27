import React from 'react';
import {  Carousel, Row, Col } from 'antd';

const styles = {
  Row: {
    paddingTop: 10,
  },
  Carousel: {
    height: 300
  },
  Img: {
    height: 300,
    width: 1200
  }
};

const HeroApp = () => {
  return (
    <div>
      <Row style={styles.Row}>
        <Col span={1}></Col>
        <Col span={22}>
          <Carousel autoplay>
            <div style={styles.Carousel}>
              <img style={styles.Img} src="http://www.umiresep.com/wp-content/uploads/2016/02/Cara-Membuat-Burger-Sajian-Simple-Enak-Mudah.jpg" alt="burger"/>
            </div>
            <div>
              <img style={styles.Img} src="http://feedthelion.co.uk/wp-content/uploads/2016/12/10-your-shout.jpg" alt="burger"/>
            </div>
            <div>
              <img style={styles.Img} src="http://www.umiresep.com/wp-content/uploads/2016/02/Cara-Membuat-Burger-Sajian-Simple-Enak-Mudah.jpg" alt="burger"/>
            </div>
            <div>
              <img style={styles.Img} src="http://www.umiresep.com/wp-content/uploads/2016/02/Cara-Membuat-Burger-Sajian-Simple-Enak-Mudah.jpg" alt="burger"/>
            </div>
          </Carousel>
        </Col>
        <Col span={1}></Col>
      </Row>
    </div>
  )
}

export default HeroApp
