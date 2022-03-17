import './App.css';
import TodoList from "./Components/TodoList"
import Pomodoro from './Components/Pomodoro';

function App() {
  return (
    <div className="app">
      <TodoList />
      <Pomodoro />
    </div>
  );
}

export default App;