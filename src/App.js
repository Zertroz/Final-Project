import './App.css';
import { Switch, Route, useHistory, Link, NavLink } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import StatPage from './components/StatPage/StatPage';
import { useState } from 'react';
import { useEffect } from 'react';
import stats from './queryData';
import SkillPage from './components/SkillPage/SkillPage';
import fetchData from './apiCalls';
import Form from './components/Form/Form';

function App() {
  const [stat, setStat] = useState({});
  const [skill, setSkill] = useState({});
  const [error, setError] = useState('');
  const history = useHistory();
  const statList = stats.flatMap(stat => stat.name);
  let type;
  let name;

  const handleSearch = (event, value) => {
    event.preventDefault();
    loadPage(value)
    history.push(`/${type}/${name}`);
  }
  
  const loadPage = (value) => {
    if (!value) {
      return
    }
    setSkill('');
    setStat('');
    if(statList.includes(value.toLowerCase())) {
      name = stats.find(stat => stat.name.includes(value)).index;
      type = 'ability-scores';
    } else {
      name = value.split(' ').join('-');
      type = 'skills';
    }
    getData();
  }

  const getData = async () => {
    const data = await fetchData(type, name);
    if(type === 'ability-scores') {
      setStat(data);
    } else if (type === 'skills') {
      setSkill(data);
    } else {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPage()
  }, [])

  return (
    <main className='App'>
      <header>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
          <h1>Saviors and Starters</h1>
        </Link>
        <Form handleSearch={handleSearch} />
      </header>
      <Switch>
        <Route exact path='/ability-scores/:stat' render={(({match}) => {
          return <StatPage stat={stat} value={match.params.stat} loadPage={loadPage} />
        })}/>
        <Route exact path='/skills/:skill' render={(({match}) => {
          return <SkillPage skill={skill} value={match.params.skill} loadPage={loadPage} />
        })}/>
        <Route path='/'>{<Homepage data={stats.map(stat => stat.name[0])} loadPage={loadPage} />}</Route>
      </Switch>
    </main>
  );
};

export default App;
