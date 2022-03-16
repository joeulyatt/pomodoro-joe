import './App.css';
import TodoList from "./Components/TodoList"
import TimerList from './Components/TimerList';

function App() {
  return (
    <div className="app">
      <TodoList />
      <TimerList />
    </div>
  );
}

export default App;