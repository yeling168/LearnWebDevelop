import React from "react";
import { Row, Col } from "antd";
import { Tabs, Carousel } from "antd";
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
export default class PCNewsContainer extends React.Component {
  render() {
    //API refer to https://react-slick.neostack.com/docs/api/
    const settings = {
      dots: true, //是否显示面板指示点
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true //是否自动切换
    };
    return (
      <div>
        <Row>
          <Col span={2} />
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div>
                    <img src="./src/images/carousel_1.jpg" />
                  </div>
                  <div>
                    <img src="./src/images/carousel_2.jpg" />
                  </div>
                  <div>
                    <img src="./src/images/carousel_3.jpg" />
                  </div>
                  <div>
                    <img src="./src/images/carousel_4.jpg" />
                  </div>
                </Carousel>
              </div>
            </div>
            <Tabs>
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock
                  count={22}
                  type="top"
                  width="100%"
                  bordered="false"
                />
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock
                  count={22}
                  type="guoji"
                  width="100%"
                  bordered="false"
                />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    );
  }
}
