import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import reducers from './reducer'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension(): f => f
))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={App}></Route>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
