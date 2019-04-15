import { React, Component } from "react";

class Home extends Component {
  render() {
    const { match, location } = this.props;
    const { username } = this.state;
    return (
      <div>
        <Header
          username={username}
          onLogout={this.handleLogout}
          location={location}
        />
        {/* 帖子列表路由配置 */}
        <Route
          path={match.url}
          exact
          render={props => <PostList userId={userId} {...props} />}
        />
        {/* 帖子详情路由配置 */}
        <Route
          path={`${match.url}/:id`}
          render={props => <Post userId={userId} {...props} />}
        />
      </div>
    );
  }
}

export default Home;
