import './App.css';
import Theme from './themeApp/Theme';
import Timer from './timerApp/Timer';
import TodoAppHome from './todoApp/TodoAppHome';

function App() {
  return (
    <div className="App">
      
      {/* Theme App */}
      <Theme/>

      {/* Timer App */}
      <Timer/>

      {/* ToDo List App */}
      <TodoAppHome/>
    </div>
  );
}

export default App;
