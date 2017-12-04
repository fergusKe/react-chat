import React, { Component } from 'react'
import axios from 'axios'

class AuthRoute extends Component {
	componentDidMount() {
		// 获取用户信息
		axios.get('/user/info')
			.then(res => {
				if (res.status === 200) {
					console.log(res.data)
				}
			})
		// 是否登录
		// 现在的url地址  login是不需要跳转的

		// 用户的type 身份是boss还是牛人

		// 用户是否完善信息（选择头像 个人简介）
	}
	
	render() {
		return (
			<div>
				判斷跳轉的地方
			</div>
		)
	}
}

export default AuthRoute