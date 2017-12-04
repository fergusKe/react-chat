import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'

class Register extends Component {
	state = {
		type: 'genius'
	}

	render() {
		const RadioItem = Radio.RadioItem

		return (
			<div>
				<Logo></Logo>
				<h2>註冊頁</h2>
				<List>
					<InputItem>用戶</InputItem>
					<InputItem>密碼</InputItem>
					<InputItem>確認密碼</InputItem>
					<RadioItem checked={this.state.type === 'genius'}>
						牛人
					</RadioItem>
					<RadioItem checked={this.state.type === 'boss'}>
						BOSS
					</RadioItem>
					<WhiteSpace />
					<Button type="primary">註冊</Button>
				</List>
			</div>
		)
	}
}

export default Register