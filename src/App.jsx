import './App.css';
import List from './List'

function App() {
  const tasks = [
    {id:1, title: 'jest 해보기'},
  ]
  return (
    <div className="App">
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
