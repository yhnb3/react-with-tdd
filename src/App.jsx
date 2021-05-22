import React, { useEffect} from 'react'

import ListContainer from './component/ListContainer'
// import Input from './component/Input'
import { useDispatch } from 'react-redux'
import { setTasks } from './actions'

const tasks = [
  {id:1, title: 'jest 해보기'},
  {id:2, title: '그 다음엔 뭘해볼까'}
]
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTasks(tasks))
  })
  return (
    <div className="App">
      <h1>Todo</h1>
      {/* <Input /> */}
      <ListContainer />
    </div>
  );
}

export default App;
