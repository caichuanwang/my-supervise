/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-03 13:56:16
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-04 15:37:01
 */
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Header from '../../components/heaer'
import {add} from '../../store/action'


function Home(props) {
  // const [count,setCount] = useState(0);
  const {counts} = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="text">
        这是Home
      </div>
      <div>
        总数{counts}
      </div>
      <button onClick={()=> {dispatch(add(3))}}>增加</button>
      <Header/>
    </div>
  )
}

export default Home
