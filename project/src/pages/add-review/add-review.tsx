import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../enums/route-enum';
import { FILMS } from '../../Moq/Films-List';
import { IPropsFilms } from '../../types/type-films/Type-Films';

function AddReview(_props:IPropsFilms):JSX.Element{
  const [formData,SetFormData] = useState({
    rating:'',
    reviewText:''
  });
  const {id} = useParams();
  const film = FILMS.filter((item)=> (item.id === id))[0];
  const ArrayRaiting = [1,2,3,4,5,6,7,8,9,10];
  if(film === undefined){
    return(
      <Navigate to={AppRoute.NotFound} />
    );
  }
  const HandleChange = (e:React.ChangeEvent) =>{
    const {name,value} = e.target as HTMLInputElement;
    SetFormData({...formData, [name]: value});
  };
  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.img} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.img} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                ArrayRaiting.map((i) =>(
                  <>
                    <input key={i} onChange={HandleChange} className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i } />
                    <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
                  </>
                ))
              }


            </div>
          </div>

          <div className="add-review__text">
            <textarea onChange={HandleChange} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>

  );
}
export default AddReview;
