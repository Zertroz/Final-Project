import { Link } from 'react-router-dom';
import './StatPage.css';
import { useEffect } from 'react';

function StatPage({value, stat, loadPage}) {
  const {desc, full_name, index, name, skills, url} = stat
  let skillList
  let body
  
  if (skills && skills.length >= 1) {
    body = desc.map((desc, index) => <p className={'body'} key={index}>{desc}</p>)
    skillList = skills.map(skill => <Link key={skill.index} to={`/skills/${skill.index}`}><li>{skill.name}</li></Link>)
  } else if (skills) {
    body = desc.map((desc, index) => <p key={index}>{desc}</p>)
    skillList = 'Constitution has no associated skills.'
  }
  
  useEffect(() => {
    loadPage(value)
  }, [])

  return (
    <section className='stat-page'>
      <h2>{full_name}</h2>
      <h6>(Abbreviated as {name})</h6>
      {body}
      <div className='skill-list'>
        <p>{full_name} governs these skills:</p>
        {skillList}
      </div>
    </section>
  )
}

export default StatPage;