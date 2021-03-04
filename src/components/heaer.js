/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-04 14:55:08
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-04 14:56:30
 */
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


export default function Heaer() {
  const {counts} = useSelector(state => state)

  return (
    <div>
      总数{counts}
    </div>
  )
}
