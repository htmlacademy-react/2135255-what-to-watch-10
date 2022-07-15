import { IPropsFilm } from '../../types/type-films/Type-Films';

function FilmCard(film:IPropsFilm):JSX.Element{
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.Film.img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.Film.name} дата выхода {film.Film.date.toDateString()}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
