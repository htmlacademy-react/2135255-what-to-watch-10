import { IFilm } from '../../types/type-films/Type-Films';
import FilmList from '../film-list/film-list';
interface IFilmsFooter{
  typeFilms:IFilm,
  films:IFilm[]
}

function FilmFooter(props:IFilmsFooter):JSX.Element{
  const ArrayShowMore = props.films.filter((item)=>(item.genre === props.typeFilms.genre));
  return(
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__films-list">
          {
            <FilmList films={ArrayShowMore} />
          }

        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default FilmFooter;
