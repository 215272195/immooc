import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
	BrowserRouter,
	Redirect,
} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

// 合并reducer的文件
import reducers from './reducer'
import './config';

import App from './app'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
));

// 无状态组件
// function Boss() {
// 	return <h1>Boss</h1>
// }

// boss genius me msg 4个页面有相同的内容
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
      <App></App>
			{/*服务端渲染抽离*/}
			{/*<div>*/}
				{/*/!*检测路由是不是好的*!/*/}
				{/*<AuthRoute></AuthRoute>*/}
        {/*/!*Switch标签下面命中一个path下面的就不管了*!/*/}
				{/*<Switch>*/}
          {/*/!*Boss登录后完善信息的页面*!/*/}
          {/*<Route path='/bossinfo' component={BossInfo}></Route>*/}
          {/*/!*牛人信息页*!/*/}
          {/*<Route path='/geniusinfo' component={GeniusInfo}></Route>*/}
          {/*/!*<Route path='/boss' component={Boss}></Route>*!/*/}
          {/*/!*登录*!/*/}
          {/*<Route path='/login' component={Login}></Route>*/}
          {/*/!*注册*!/*/}
          {/*<Route path='/register' component={Register}></Route>*/}
					{/*/!*聊天列表 跳到用户聊天页面 和谁聊天*!/*/}
          {/*<Route path='/chat/:user' component={Chat}></Route>*/}
          {/*/!*如果你不加Switch每个路由下面都会有Dashboard信息 如果有Switch没有命中会跳到没有path的上面*!/*/}
          {/*<Route component={Dashboard}></Route>*/}
        {/*</Switch>*/}
			{/*</div>*/}
      {/*服务端渲染抽离*/}

		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
