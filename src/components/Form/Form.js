import { useState } from 'react';
import './Form.css'

function Form({handleSearch}) {
  const [search, setSearch] = useState('')

  return (
    <form>
      <input type='text' value={search} name='search-bar' placeholder='Looking for a specific skill or class?' onChange={(event) => setSearch(event.target.value)} />
      <button onClick={(event) => {handleSearch(event, search)}}>Search</button>
    </form>
  )
}

export default Form;