import './App.css';
import Calendar from "./components/Calendar";
import '../src/index.css';

const App = () => {

  return (
    <div className="App">
      <h1>All the sports and activities in the USF Recreation Center</h1>
      <h2>Visit the recreation center for a tentsion relief in between the rigorous studies. A wide range of activities are available here.</h2>
      <Calendar />
    </div>
  )
}

export default App