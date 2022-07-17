import { Link } from 'react-router-dom';

function Page404():JSX.Element{
  return(
    <>
      <h1>Error 404</h1>
      <br/>
      <small>Page not found</small>
      <Link to={'/'} >Go to main page</Link>
    </>
  );
}
export default Page404;
