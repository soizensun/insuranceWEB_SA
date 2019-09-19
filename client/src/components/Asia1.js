import React from 'react';
import { Tabs, Collapse, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

// function callback(key) {
//     console.log(key);
// }
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

const genExtra = () => (
    <Button>ซื้อประกัน</Button>
);

class Asia1 extends React.Component{
    render(){
        return(
            <div>
                <Collapse   
                    accordion
                    style={{marginBottom: 2,}}
                    defaultActiveKey={['1']}
                    // onChange={callback}
                    // expandIconPosition= "left"
                >
                    <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                        <div>{text}</div>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
export default Asia1;

