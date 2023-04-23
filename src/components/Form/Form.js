import { useState } from 'react';
import './Form.css'

function Form({handleSearch}) {
  const [search, setSearch] = useState('')

  const searchFun = (event) => {
    if (search) {
      handleSearch(event, search)
      setSearch('')
    }
  }

  return (
    <form>
      <input type='text' value={search} name='search-bar' placeholder='Looking for a specific skill or class?' onChange={(event) => setSearch(event.target.value)} />
      <button onClick={(event) => {searchFun(event)}}>Search</button>
    </form>
  )
}

export default Form;