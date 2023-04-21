import './SkillPage.css';

function SkillPage({skill}) {
  const {index, name, desc, ability_score, url} = skill

  return (
    <section className='skill-page'>
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>Governing ability score:</p>
      <p>Intelligence</p>
    </section>
    
  )
}

export default SkillPage;