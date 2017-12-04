import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Login extends Component {
	register = () => {
		console.log(this.props)
		this.props.history.push('/register')
	}

	render() {
		return (
			<div>
				<Logo></Logo>
				<h2>登錄頁</h2>
				<WingBlank>
					<List>
						<InputItem>用戶</InputItem>
						<InputItem>密碼</InputItem>
					</List>
					<WhiteSpace />
					<Button type='primary'>登錄</Button>
					<WhiteSpace />
					<Button type='primary' onClick={this.register} >註冊</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login