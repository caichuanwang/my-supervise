/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-03 13:56:28
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-04 14:54:16
 */
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


function Login() {
  const {counts} = useSelector(state => state)
  return (
    <div>
      login
      <p>总数：{counts}</p>
    </div>
  )
}

export default Login

