import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage({data}) {
  const stats = data.map(stat => {
    return (
      <Link to={`/ability-scores/${stat.index.toLowerCase()}`} key={stat.index}>
        <div className='stat'>
          <div className='stat-square'><p>{stat.index.toUpperCase()}</p></div>
        </div>
      </Link>
    )
  })

  return (
    <div className='homepage'>
      <section className='stat-list'>
        <h4>Ability Scores</h4>
        <div className='stat-list-blocks'>
          {stats}
        </div>
      </section>
      <div className='homepage-right'>
        <section>
          <h2>Welcome to Starters and Saviors!</h2>
          <p>This site is designed to be an introductory tutorial for new and returning players of Dungeons and Dragons 5E. However, veteran players can also use it to find quick rules reference!</p>
          <p>We currently have pages for all ability scores and skills.</p>
        </section>
      </div>
    </div>
  )
}

export default Homepage;