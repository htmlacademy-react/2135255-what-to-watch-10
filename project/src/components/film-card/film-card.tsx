import { Link } from 'react-router-dom';
import { IPropsFilm } from '../../types/type-films/Type-Films';

function FilmCard(props:IPropsFilm):JSX.Element{
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.Film.img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.Film.id}`}>
          {props.Film.name} дата выхода {props.Film.date.toDateString()}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
