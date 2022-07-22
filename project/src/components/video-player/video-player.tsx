import { IFilm } from '../../types/type-films/Type-Films';

interface IPropsFilm{
  film:IFilm;
  activeVideoId:string;
}
function VideoPlayer(props:IPropsFilm):JSX.Element{
  if(props.activeVideoId === '0'){
    return(
      <div className="small-film-card__image">
        <img src={props.film.img} alt={props.film.name} width="280" height="175" />
      </div>
    );
  }
  if(props.film.id === props.activeVideoId){
    return(
      <video src={'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'} width="280" height="175" controls autoPlay muted ></video>
    );
  }else{
    return(
      <div className="small-film-card__image">
        <img src={props.film.img} alt={props.film.name} width="280" height="175" />
      </div>
    );
  }
}
export default VideoPlayer;
