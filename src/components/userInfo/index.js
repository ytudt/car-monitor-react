import React from 'react';
import {Modal} from 'antd';
import './index.scss'

function App(props) {
  return <Modal
      title="用户信息"
      visible={props.showUserInfo}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <div>用户名:{props.userInfo.userName}</div>
      <div>创建时间:{props.userInfo.createTime}</div>
    </Modal>
}
export default App;
