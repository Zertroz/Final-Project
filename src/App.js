import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import StatPage from './components/StatPage/StatPage';
import { useState } from 'react';
import { useEffect } from 'react';
import stats from './queryData';
import SkillPage from './components/SkillPage/SkillPage';
import fetchData from './apiCalls';

function App() {
  const [stat, setStat] = useState({})
  const [skill, setSkill] = useState({})
  const [error, setError] = useState('')
  const history = useHistory()
  const statList = stats.flatMap(stat => stat.name)
  let type;
  let name;
  
  const handleSearch = (event, value) => {
    event.preventDefault()
    setSkill('')
    setStat('')
    if(statList.includes(value.toLowerCase())) {
      name = stats.find(stat => stat.name.includes(value)).index
      type = 'ability-scores' 
    } else {
      type = 'skills'
    }
    getData()
    history.push(`/${type}/${value.toLowerCase()}`)
  }

  const getData = async () => {
    const data = await fetchData(type, name);
    if(type === 'ability-scores') {
      setStat(data);
    } else if (type === 'skills') {
      setSkill(data);
    } else {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <main className='App'>
      <h1>Saviors and Starters</h1>
      <Switch>
        <Route path='/ability-scores/:stat'>{<StatPage stat={stat} />}</Route>
        <Route path='/skills/:skill'>{<SkillPage skill={skill}/>}</Route>
        <Route path='/'>{<Homepage data={stats.map(stat => stat.name[0])} search={handleSearch} />}</Route>
      </Switch>
    </main>
  );
}

export default App;
