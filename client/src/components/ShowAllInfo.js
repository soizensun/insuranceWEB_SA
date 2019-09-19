import React from 'react';
import Asia1 from './Asia1'
import Asia2Plus from './Asia2Plus'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class ShowAllInfo extends React.Component{
    render(){
        return(
            <div>
                 <div>
                    <div style={{ marginBottom: 16 }}>
                    </div>
                    <Tabs tabPosition="left">
                        <TabPane tab="ประเภท 1" key="1">
                            <Asia1/>
                        </TabPane>
                        <TabPane tab="ประเภท 2+" key="2">
                            <Asia2Plus/>
                        </TabPane>
                        <TabPane tab="ประเภท 3+" key="3">
                            Content of Tab 3
                        </TabPane>
                        <TabPane tab="ประเภท 2" key="4">
                            Content of Tab 3
                        </TabPane>
                        <TabPane tab="ประเภท 3" key="5">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    } 
}

export default ShowAllInfo;