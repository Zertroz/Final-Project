import './Homepage.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

function Homepage({data, search}) {
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
    <div className='homepage'>
      <section className='stat-list'>
        {stats}
      </section>
      <div className='homepage-right'>
        <Form handleSearch={search}/>
        <section>
          <p>Basic intro goes here</p>
        </section>
      </div>
    </div>
  )
}

export default Homepage;