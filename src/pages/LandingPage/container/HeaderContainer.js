import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

const styles = {
  header: {
    background: '#008f95',
    color: '#e9b000',
    fontFamily: 'Josefin Sans'
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto'
  }
}; 

class headerContainer extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <div style={styles.wrapper} >
          Placeholder
        </div>
      </Header>
    );
  }
}

export default headerContainer;
