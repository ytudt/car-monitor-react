import React, {Component} from 'react';
import Cookies from 'js-cookie';
import {Icon, Dropdown, Menu, Modal, Form, Input, message} from 'antd';
import {connect} from 'react-redux'
import './index.scss'
import api from '../../api/index';
import MD5 from 'md5';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
import {withRouter} from "react-router-dom";
import {setUserInfo} from '../../store/actions.js'
import UserInfo from '../userInfo'

const {Header} = Layout;


const FormItem = Form.Item;
const MenuItem = Menu.Item;

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showDialog: false,
      showUserInfo: false,
      userName: '',
      password: '',
    };
  }

  componentWillMount() {
    this.getUserInfo();
  }

  render() {
    const menu = (
      <Menu>
        <MenuItem>
          <div onClick={this.handleShowUserInfo.bind(this)}>用户信息</div>
        </MenuItem>
        <MenuItem>
          <div onClick={this.modifyPassword.bind(this)}>修改密码</div>
        </MenuItem>
        <MenuItem>
          <div onClick={this.logOut.bind(this)}>退出登录</div>
        </MenuItem>
      </Menu>
    );
    let {userInfo} = this.props;
    return (
      <Header className="main-header">
        <div className="logo"/>
        <h1 className="name">北京**科技有限公司</h1>
        <div className="slot-wrap">{this.props.children}</div>
        <Dropdown overlay={menu} className="dropdown-wrap">
                        <span className="ant-dropdown-link">
                            设置 <Icon type="down"/>
                        </span>
        </Dropdown>
        <Modal visible={this.state.showDialog}
               onOk={this.handSubmit.bind(this)}
               onCancel={this.handleHideDialog.bind(this)}
               width={400}
               title="修改密码"
               destroyOnClose="true"
               className="modify-password-wrap">
          <FormItem label="用户名">
            <Input className="input-item"
                   value={userInfo.userName}
                   disabled={true}
                   prefix={<Icon type="user"
                                 style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
          </FormItem>
          <FormItem label="密码">
            <Input className="input-item"
                   onChange={this.onPasswordChange.bind(this)}
                   prefix={<Icon type="lock"
                                 style={{color: 'rgba(0,0,0,.25)'}}/>} type="text" placeholder="Password"/>
          </FormItem>
        </Modal>

        { this.state.showUserInfo &&  <UserInfo showUserInfo={this.state.showUserInfo}
                                                userInfo={this.props.userInfo}
                                                handleOk={this.handleUserOk.bind(this)}
                                                handleCancel={this.handleUserCancel.bind(this)}/> }
      </Header>
    );
  }

  getUserInfo() {
    let {setUserInfo} = this.props;
    api.core.getUserInfo()
      .then(({data}) => {
        setUserInfo(data.data);
      })
      .catch(() => message.error('用户信息获取失败'));
  }

  logOut() {
    Cookies.remove('token');
    this.props.history.push('/login');
  }

  modifyPassword() {
    this.setState({showDialog: true});
  }

  handleHideDialog() {
    this.setState({showDialog: false});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleShowUserInfo(){
    this.setState({showUserInfo: true});
  }
  handleUserOk(){
    this.setState({showUserInfo: false});
  }
  handleUserCancel(){
    this.setState({showUserInfo: false});
  }

  handSubmit() {
    let {id, userName, expirationTime, roleId} = this.props.userInfo;
    let password = this.state.password;
    api.config.addUser({
      id,
      roleId,
      userName,
      password: MD5(password),
      expirationTime,
      enable: true,
    })
      .then(({data}) => {
        if (!data.success) return Promise.reject();
        message.info('修改密码成功,请重新登录');
        this.setState({showDialog: false});
        setTimeout(() => {
          this.logOut();
        }, 1000);
      })
      .catch(() => {
        message.error('修改密码失败,请重新尝试~');
      });

  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo(data) {
      dispatch(setUserInfo(data));
    }
  }

};
App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element
  ])
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
