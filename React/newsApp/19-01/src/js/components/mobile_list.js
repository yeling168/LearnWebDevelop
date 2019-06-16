import React from "react";
import { Row, Col } from "antd";
import Tloader from "react-touch-loader";
import { Router, Route, Link, browserHistory } from "react-router";
export default class MobileList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: "",
      count: 5, //默认加载5条，每次点击再添加5条
      hasMore: 0, //判断是否显示加载更多
      initialzing: 1, //标识组件初始化的一些状态
      refreshedAt: Date.now()
    };
  }
  componentWillMount() {
    var myFetchOptions = {
      method: "GET"
    };
    fetch(
      "http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
        this.props.type +
        "&count=" +
        this.props.count,
      myFetchOptions
    )
      .then(response => response.json())
      .then(json => this.setState({ news: json }));
  }

  loadMore(resolve) {
    setTimeout(() => {
      var count = this.state.count;
      this.setState({
        count: count + 5
      });
      fetch(
        "http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
          this.props.type +
          "&count=" +
          this.state.count,
        myFetchOptions
      )
        .then(response => response.json())
        .then(json => this.setState({ news: json }));
      this.setState({
        hasMore: count > 0 && count < 50
      });
      resolve();
    }, 2e3);
  }
  componentDidMount() {
    setTimeout(() => {
      this.state({
        hasMore: 1,
        initialzing: 2
      });
    }, 2e3);
  }
  render() {
    var { hasMore, initialzing, refreshedAt } = this.state;
    const { news } = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
          <section
            key={index}
            className="m_article list-item special_section clearfix"
          >
            <Link to={`details/${newsItem.uniquekey}`}>
              <div className="m_article_img">
                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
              </div>
              <div className="m_article_info">
                <div className="m_article_title">
                  <span>{newsItem.title}</span>
                </div>
                <div className="m_article_desc clearfix">
                  <div className="m_article_desc_l">
                    <span className="m_article_channel">
                      {newsItem.realtype}
                    </span>
                    <span className="m_article_time">{newsItem.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        ))
      : "没有加载到任何新闻";
    return (
      <div>
        <Row>
          <Col span={24}>
            {/* {newsList} */}
            <Tloader
              className="main"
              onLoadMore={this.loadMore.bind(this)}
              hasMore={hasMore}
              initialzing={initialzing}
            >
              {newsList}
            </Tloader>
          </Col>
        </Row>
      </div>
    );
  }
}
