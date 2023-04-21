import { Link } from 'react-router-dom';
import './StatPage.css';

function StatPage({stat}) {
  const {desc, full_name, index, name, skills, url} = stat
  const skillList = skills.map(skill => <Link key={skill.index} to={`/skills/${skill.index}`}><li>{skill.name}</li></Link>)
  return (
    <section className='stat-page'>
      <h2>{full_name}</h2>
      <h6>(Abbreviated as {name})</h6>
      <p>{desc}</p>
      <p>{full_name} governs these skills:</p>
      {skillList}
    </section>
  )
}

export default StatPage;