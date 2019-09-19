import React from 'react';
import Asia1 from './Asia1'
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
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            <Asia1/>
                        </TabPane>
                     

                        
                    </Tabs>
                </div>
            </div>
        );
    } 
}

export default ShowAllInfo;