import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/route-enum';
import { IPropsFilm } from '../../types/type-films/Type-Films';

function FilmCard(props:IPropsFilm):JSX.Element{
  const [PlayVideo,SetPlayVideo] = useState('');
  const handleMouseEvent: React.MouseEventHandler<HTMLElement> = (e) => {
    SetPlayVideo(e.currentTarget.dataset.id as string);
  };
  return(
    <article onMouseOver={handleMouseEvent} data-id={props.Film.id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.Film.img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <p>{PlayVideo}</p>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${props.Film.id}`}>
          {props.Film.name} дата выхода {props.Film.date.toDateString()}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
