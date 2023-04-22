import './SkillPage.css';
import stats from '../../queryData';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SkillPage({skill, value, loadPage}) {
  const {index, name, desc, ability_score, url} = skill;
  let governingStat;
  if(name) {
    const findStat = stats.find(stat => stat.name.includes(ability_score.index)).name[0];
    governingStat = <Link to={`/ability-scores/${findStat}`}><p>{findStat}</p></Link>
  }

  useEffect(() => {
    loadPage(value);
  }, [])

  return (
    <section className='skill-page'>
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>Governing ability score:</p>
      {governingStat}
    </section>
  );
};

export default SkillPage;