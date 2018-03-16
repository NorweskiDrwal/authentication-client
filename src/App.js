import React, { Component } from 'react';
import './App.css';

import HeaderContainer from './pages/LandingPage/container/HeaderContainer';
import ContentContainer from './pages/LandingPage/container/ContentContainer';

import { Layout } from 'antd';
const { Footer } = Layout;

const styles = {
  layout: {
    background: '#f5f5f5',
    height: '100vh'
  },
  content: {
    padding: '50px 50px 0 50px'
  }
};

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={styles.layout} >
        <HeaderContainer />
        <ContentContainer />
        <Footer style={{ textAlign: 'center' }}>
          Exciety ©2018
        </Footer>
      </Layout>
    );
  }
}

export default App;
