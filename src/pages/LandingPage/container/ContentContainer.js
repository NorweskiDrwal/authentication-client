import React, { Component } from 'react';
import EntranceCard from '../component/Content/EntranceCard';

import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

const styles = {
  content: {
    fontFamily: 'Josefin Sans',
    padding: '50px 50px 0 50px'
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto'
  }
}; 

class contentContainer extends Component {
  render() {
    return (
      <Content style={styles.content}>
        <Row style={styles.wrapper}>
          <Col span={12} />
          <Col span={12}>
            <EntranceCard />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default contentContainer;
