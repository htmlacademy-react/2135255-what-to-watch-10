import Main from '../../pages/main/Main';

function App(props): JSX.Element {
  console.log(props.FilmTypes);
  return (<Main FilmTypes={props.FilmTypes} />);
}
export default App;
