/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-04 13:49:08
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-04 14:26:25
 */
import {createStore,applyMiddleware,compose} from 'redux'
// 这里必须引入applyMiddleware才可以使用中间件
import thunk from 'redux-thunk'
import reducer from './reducer' //传入管理员
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
   reducer,enhancer
  )

export default store