import './StatPage.css';

function StatPage({stat}) {
  const {desc, full_name, index, name, skills, url} = stat
  const skillList = skills.map(skill => <li key={skill.index}>{skill.name}</li>)
  console.log(skills)
  return (
    <section>
      <h2>{full_name}</h2>
      <h6>(Abbreviated as {name})</h6>
      <p>{desc}</p>
      <p>Governing skills:</p>
      {skillList}
    </section>
  )
}

export default StatPage;