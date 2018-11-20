import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import {withRouter} from "react-router-dom";
import MD5 from 'md5';
import api from '../api';
import loginBg from '../img/login-bg.jpeg';
const loginWrap = {
    backgroundImage: `url(${loginBg})`,
    height: '100%',
    backgroundSize: 'cover',
    paddingTop: '100px',
};

const loginContent = {
    width: '400px',
    margin: '200px auto',
    background: '#fff',
    padding: '50px 50px 10px',
    borderRadius: '5px',
};
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.form.validateFields();
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const {userName, password} = values;
            api.login.doLogin({userName, password: MD5(password)})
            .then(({data}) => {
                if(!data.success) return message.error(data.message);
                this.props.history.push('/');
            }).catch(() => {message.error('登录失败')});
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div className="login-wrap" style={loginWrap}>
                <div style={loginContent}>
                    <Form onSubmit={this.handleLogin}>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your userName!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}>
                            <Button type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                    className="login-form-button">
                                登录
                            </Button>
                        </FormItem>

                    </Form>
                </div>

            </div>
        );
    }
}
export default withRouter(Form.create()(App));
