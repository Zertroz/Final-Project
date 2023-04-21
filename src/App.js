import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import StatPage from './components/StatPage/StatPage';
import { useState } from 'react';
import { useEffect } from 'react';
import {stat, skill} from './testdata';
import SkillPage from './components/SkillPage/SkillPage';

function App() {
  const testData = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
  // const [stat, setStat] = useState({})
  const history = useHistory()
  
  // const fetchStat = async () => {
  //   const response = await fetch('https://www.dnd5eapi.co/api/ability-scores/cha');
  //   const data = await response.json();
  //   setStat(data);
  //   console.log(stat)
  // }
  const handleSearch = (event, value) => {
    event.preventDefault()
    console.log(value)
    history.push(`/ability_scores/${value.toLowerCase()}`)
  }

  // useEffect(() => {
  //   fetchStat()
  // }, [])

  return (
    <main className='App'>
      <h1>Saviors and Starters</h1>
      <Switch>
        <Route path='/ability_scores/:stat'>{<StatPage stat={stat}/>}</Route>
        <Route path='/skills/:skill'>{<SkillPage skill={skill}/>}</Route>
        <Route path='/'>{<Homepage data={testData} search={handleSearch} />}</Route>
      </Switch>
    </main>
  );
}

export default App;
