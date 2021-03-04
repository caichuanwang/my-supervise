/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-03-04 13:49:25
 * @LastEditors: ekko
 * @LastEditTime: 2021-03-04 15:31:51
 */
let defaultState = {
  counts:2
}

export default function reducer (state = defaultState , actions)  {

  switch (actions.type) {
    case 'add':
      // let newState = JSON.parse(JSON.stringify(state));
      let newState = {}
      Object.assign(newState,state)
      newState.counts = state.counts + actions.value
      console.log(newState)
      return newState
  
    default:
      return state
  }


}