/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-03 15:01:52
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-03 15:08:35
 */
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

export const routers = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path='/login' exact component={Login}></Route>
    </Switch>
  </Router>
  )
}