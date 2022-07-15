import { IFilm } from '../types/type-films/Type-Films';


function randomDate(start:Date, end:Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const FILMS:IFilm[] = [
  {name:'Fantastic Beasts: The Crimes of Grindelwald', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'},
  {name:'Bohemian Rhapsody', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/bohemian-rhapsody.jpg'},
  {name:'Macbeth', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/macbeth.jpg'},
  {name:'Aviator', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/aviator.jpg'},
  {name:'We need to talk about Kevin', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/we-need-to-talk-about-kevin.jpg'},
  {name:'What We Do in the Shadows', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/what-we-do-in-the-shadows.jpg'},
  {name:'Revenant', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/revenant.jpg'},
  {name:'Johnny English', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/johnny-english.jpg'},
  {name:'Shutter Island', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/shutter-island.jpg'},
  {name:'Pulp Fiction', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/pulp-fiction.jpg'},
  {name:'No Country for Old Men', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/no-country-for-old-men.jpg'},
  {name:'Snatch', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/snatch.jpg'},
  {name:'Moonrise Kingdom', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/moonrise-kingdom.jpg'},
  {name:'Seven Years in Tibet', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/seven-years-in-tibet.jpg'},
  {name:'Midnight Special', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/midnight-special.jpg'},
  {name:'War of the Worlds', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/war-of-the-worlds.jpg'},
  {name:'Dardjeeling Limited', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/dardjeeling-limited.jpg'},
  {name:'Orlando', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/orlando.jpg'},
  {name:'Mindhunter', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/mindhunter.jpg'},
  {name:'Midnight Special', date: randomDate(new Date(2012, 0, 1), new Date()),img:'img/midnight-special.jpg'},
];
