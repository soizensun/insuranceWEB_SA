import React from 'react';
import { Layout, Menu } from 'antd';
import ShowAllInfo from './ShowAllInfo'
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

class Structure extends React.Component{

    onclikTest = () => {
        console.log("click button on menybar");
    }
    
    render(){
        return(
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="App">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" onClick={this.onclikTest}>nav 1</Menu.Item>
                    </Menu>
                </div>
                </Header>
                <Content style={{ marginTop: 64 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        <ShowAllInfo/>
                    </div>
                </Content>
            </Layout>
        );
    }

}

export default Structure;