export interface IFilm{
  name:string;
  date:Date;
  img:string;
}
export interface IPropsFilms{
  Films:IFilm[]
}
export interface IPropsFilm{
  Film:IFilm
}
