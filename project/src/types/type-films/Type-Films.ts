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
  films:IFilm[]
}
export interface IPropsFilm{
  film:IFilm
}
export interface IRating{
  Raiting:string
}
