import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';

function App() {
  const testData = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
  const history = useHistory()

  const handleSearch = (event, value) => {
    event.preventDefault()
    console.log(value)
    history.push(`/ability_scores/${value}`)
  }

  return (
    <main className='App'>
      <h1>Saviors and Starters</h1>
      <Switch>
        <Route path='/'>{<Homepage data={testData} search={handleSearch} />}</Route>
      </Switch>
    </main>
  );
}

export default App;
