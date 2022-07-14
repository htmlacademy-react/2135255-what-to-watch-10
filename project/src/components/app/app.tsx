import MainPage from '../../pages/main-page/main-page';
import { IPropsFilms } from '../../types/type-films/Type-Films';

function App(films:IPropsFilms):JSX.Element {
  return (
    <MainPage Films={films.Films} />
  );
}
export default App;
