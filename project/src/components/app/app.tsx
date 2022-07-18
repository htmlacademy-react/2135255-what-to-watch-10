import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../enums/route-enum';
import AddReview from '../../pages/add-review/add-review';
import Detailes from '../../pages/film-detailes/film-detailes';
import FilmReview from '../../pages/film-review/film-review';
import Film from '../../pages/film/film';
import Login from '../../pages/login/login';
import MainPage from '../../pages/main-page/main-page';
import MyList from '../../pages/my-list/my-list';
import Page404 from '../../pages/page-404/page-404';
import Player from '../../pages/player/player';
import { IPropsFilms } from '../../types/type-films/Type-Films';
import PrivateRoute from '../private-route/private-route';

function App(props:IPropsFilms):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={props.films} />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute
            authorization={AuthorizationStatus.Auth}
          >
            <MyList films={props.films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Film}:id`} element={<Film films={props.films} />} />
        <Route path={`${AppRoute.Film}:id/details`} element={<Detailes films={props.films} />} />
        <Route path={`${AppRoute.Film}:id/review`} element={<FilmReview films={props.films} />} />
        <Route path={`${AppRoute.AddReview}:id`} element={<AddReview films={props.films} />} />
        <Route path={`${AppRoute.Player}:id`} element={<Player />} />
        <Route path={AppRoute.NotFound} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
