import './ErrorPage.css'

function ErrorPage({error}) {
  return (
    <section className='error-page'>
      <p>Could not find results, please try again.</p>
      {error}
    </section>
  )
}

export default ErrorPage;