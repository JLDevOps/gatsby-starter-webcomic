import React from 'react';
import Layout from '../components/Layout/Layout';
import { Result } from 'antd';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        ></Result>
      </Layout>
    );
  }
}

export default NotFoundPage;
