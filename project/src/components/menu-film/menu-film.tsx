import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../enums/route-enum';
import { IPropsFilm } from '../../types/type-films/Type-Films';

function MenuFilm(props:IPropsFilm):JSX.Element{
  const location = useLocation();
  const { pathname } = location;
  return(
    <nav className='film-nav film-card__nav'>
      <ul className='film-nav__list'>
        <li className={pathname === `${AppRoute.Film}${props.Film.id}` ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} >
          <Link to={`${AppRoute.Film}${props.Film.id}`} className='film-nav__link'>Overview</Link>
        </li>
        <li className={pathname === `${AppRoute.Detailes}${props.Film.id}` ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} >
          <Link to={`${AppRoute.Detailes}${props.Film.id}`} className='film-nav__link'>Details</Link>
        </li>
        <li className={pathname === `${AppRoute.Film}${props.Film.id}/review` ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} >
          <Link to={`${AppRoute.Film}${props.Film.id}/review`} className='film-nav__link'>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
export default MenuFilm;
