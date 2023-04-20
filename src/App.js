import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';

function App() {
  const testData = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

  return (
    <main className='App'>
      <h1>Saviors and Starters</h1>
      <Switch>
        <Route path='/'>{<Homepage data={testData} />}</Route>
      </Switch>
    </main>
  );
}

export default App;
