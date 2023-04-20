import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage({data}) {
  const stats = data.map(stat => {
    return (
      <Link to={`/abillity_scores/${stat}`} key={stat}>
        <div className='stat'>
          <div className='stat-square'></div>
          <p>{stat}</p>
        </div>
      </Link>
    )
  })

  return (
    <section className='stat-list'>
      {stats}
    </section>
  )
}

export default Homepage;