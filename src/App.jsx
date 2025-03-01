import './App.css';
import Calendar from "./components/Calendar";

const App = () => {

  return (
    <div className="App">
      <h1>Barcelona Weekly Schedule</h1>
      <h2>All FC Barcelona matches and practices this week are listed here.</h2>
      <Calendar />
    </div>
  )
}

export default App