import React from 'react';
import './App.css';
import {Layout, Header, HeaderRow, Content, Tab, HeaderTabs} from "react-mdl"


function App() {
  return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header>
            <HeaderRow title="Infobility" />
            <HeaderTabs ripple activeTab={0} onChange={(tabId) => {}}>
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
            </HeaderTabs>
        </Header>
        <Content>
            <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
        </Content>
    </Layout>
            </div>
  );
}

export default App;
