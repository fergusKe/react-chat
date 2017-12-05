const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
<<<<<<< HEAD
mongoose.connect(DB_URL, {
	useMongoClient:true
})

const models = {
	user: {
		'user': { type: String, 'require': true },
		'pwd': { type: String, 'require': true },
		'type': { type: String, 'require': true },
		'avatar': { type: String },
		'desc': { type: String },
		'title': { type: String },
		'company': { 'type': String },
		'money': { 'type': String }
	},
	chat: {

	}
}

for (let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
}
||||||| merged common ancestors
mongoose.connect(DB_URL)
=======
mongoose.connect(DB_URL)

const models = {
	user: {
		'user': { type: String, 'require': true },
		'pwd': { type: String, 'require': true },
		'type': { type: String, 'require': true },
		'avatar': { type: String },
		'desc': { type: String },
		'title': { type: String },
		'company': { 'type': String },
		'money': { 'type': String }
	},
	chat: {

	}
}

for (let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
}
>>>>>>> c3c5f003b721d91c0c1315a1fcb318e418ce047b
