import MainPage from '../../pages/main-page/main-page';
import { IPropsFilms } from '../../types/type-films/Type-Films';

function App(props:IPropsFilms):JSX.Element {
  return (
    <MainPage Films={props.Films} />
  );
}
export default App;
