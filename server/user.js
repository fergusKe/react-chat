const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
	User.find({}, function(err,doc) {
		return res.json(doc)
	})
})

Router.post('/register', function(req, res) {
	console.log(req.body.data)
	const { user, pwd, type } = req.body.data
	User.findOne({ user }, function(err, doc) {
		if (doc) {
			return res.json({ code: 1, msg: '用戶名重複'})
		}
		User.create({ user, pwd, type }, function(e, d) {
			if (e) {
				return res.json({ code: 1, msg: '後端出錯了'})
			}
			return res.json({ code: 0 })
		})
	})
})

Router.get('/info', function(req, res) {
	// 用戶有沒有 cookie
	return res.json({ code: 1 })
})

module.exports = Router