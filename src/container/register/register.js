import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'

class Register extends Component {
	state = {
		user: '',
		pwd: '',
		repeatpwd: '',
		type: 'genius'
	}

	handleChange = (key,val) => {
		this.setState({
			[key]: val
		})
	}

	handleRegister = () => {
		console.log(this.state)
	}

	render() {
		const RadioItem = Radio.RadioItem

		return (
			<div>
				<Logo></Logo>
				<h2>註冊頁</h2>
				<List>
					<InputItem
						onChange={v => this.handleChange('user', v)}
					>
						用戶
					</InputItem>
					<InputItem
						type='password'
						onChange={v => this.handleChange('pwd', v)}
					>
						密碼
					</InputItem>
					<InputItem
						type='password'
						onChange={v => this.handleChange('repeatpwd', v)}
					>
						確認密碼
					</InputItem>
					<RadioItem
						checked={this.state.type === 'genius'}
						onChange={() => this.handleChange('type', 'genius')}
					>
						牛人
					</RadioItem>
					<RadioItem
						checked={this.state.type === 'boss'}
						onChange={() => this.handleChange('type', 'boss')}
					>
						BOSS
					</RadioItem>
					<WhiteSpace />
					<Button
						type="primary"
						onClick={this.handleRegister}
					>
						註冊
					</Button>
				</List>
			</div>
		)
	}
}

export default Register