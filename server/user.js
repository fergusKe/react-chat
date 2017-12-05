const express = require('express')
const Router = express.Router()
<<<<<<< HEAD
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
	User.find({}, function(err,doc) {
		return res.json(doc)
	})
})
||||||| merged common ancestors
=======
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
	User.fund({}, function(err, doc) {
		return res.json(doc)
	})
})
>>>>>>> c3c5f003b721d91c0c1315a1fcb318e418ce047b

Router.get('/info', function(req, res) {
	// 用戶有沒有 cookie
	return res.json({ code: 1 })
})

module.exports = Router