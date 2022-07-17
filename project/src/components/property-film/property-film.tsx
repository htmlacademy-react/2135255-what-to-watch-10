import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/route-enum';
import { IPropsFilm } from '../../types/type-films/Type-Films';

function PropertyFilm(props:IPropsFilm):JSX.Element{
  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to={AppRoute.Film.replace(':id',props.Film.id)} className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <a href="#" className="film-nav__link">Details</a>
        </li>
        <li className="film-nav__item">
          <Link to={AppRoute.Review.replace(':id',props.Film.id)} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
export default PropertyFilm;
