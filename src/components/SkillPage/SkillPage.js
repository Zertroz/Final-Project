import './SkillPage.css';
import { stats } from '../../queryData';
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
      <h2 className='title'>{name}</h2>
      <p>{desc}</p>
      <div className='stat'>
        <p>Governing ability score:</p>
        {governingStat}
      </div>
    </section>
  );
};

export default SkillPage;