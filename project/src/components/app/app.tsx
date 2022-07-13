import Main from '../../pages/main/Main';
import { IFilm } from '../../types/TypeFilms';

function App(props:IFilm):JSX.Element {
  return (
    <Main {...props} />
  );
}
export default App;
