import React from 'react';
import LoginForm from './LoginForm';
import { Card, Tabs } from 'antd';
const TabPane  = Tabs.TabPane; 

const styles = {
  card: {
    background: '#f5f5f5',
    border: '10px solid #008f95'
  },
  tabs: {
    background: '#f5f5f5'
  }
}

const EntranceCard = () => {
  return(
    <Card style={styles.card} >
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span>Register</span>} key="1">
          Tab 1 
        </TabPane>
        <TabPane tab={<span>Login</span>} key="2">
          <LoginForm />
        </TabPane>
      </Tabs>
    </Card>
  );
}

export default EntranceCard;
