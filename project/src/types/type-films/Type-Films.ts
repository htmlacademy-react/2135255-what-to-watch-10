export interface IFilm{
  id:string;
  name:string;
  date:Date;
  img:string;
  genre:string;
  description:string;
  video:string;
}
export interface IPropsFilms{
  Films:IFilm[]
}
export interface IPropsFilm{
  Film:IFilm
}
