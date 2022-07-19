import { useMouseHover } from '../../hooks/mouse-hover';
import { IFilm } from '../../types/type-films/Type-Films';
import FilmCard from '../film-card/film-card';
interface IFilmsFooter{
  typeFilms:IFilm,
  films:IFilm[]
}

function FilmFooter(props:IFilmsFooter):JSX.Element{
  const {MouseOver,MouseOut} = useMouseHover();
  return(
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__films-list">
          {
            props.films.map((Item)=>{
              if(Item.genre === props.typeFilms.genre){
                return(<FilmCard key={Item.id} film={Item} mouseOver={MouseOver} mouseOut={MouseOut} />);
              }else{
                return(null);
              }
            })
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
