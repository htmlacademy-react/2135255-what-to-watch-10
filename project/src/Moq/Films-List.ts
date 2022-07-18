import { IFilm, IRating } from '../types/type-films/Type-Films';


function randomDate(start:Date, end:Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const FILMS:IFilm[] = [
  {id : '1', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Fantastic Beasts: The Crimes of Grindelwald',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'},
  {id : '2', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Bohemian Rhapsody',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/bohemian-rhapsody.jpg'},
  {id : '3', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Macbeth',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/macbeth.jpg'},
  {id : '4', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Aviator',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/aviator.jpg'},
  {id : '5', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'We need to talk about Kevin',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/we-need-to-talk-about-kevin.jpg'},
  {id : '6', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'What We Do in the Shadows',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/what-we-do-in-the-shadows.jpg'},
  {id : '7', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Revenant',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/revenant.jpg'},
  {id : '8', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Johnny English',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/johnny-english.jpg'},
  {id : '9', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Shutter Island',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/shutter-island.jpg'},
  {id : '10', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Pulp Fiction',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/pulp-fiction.jpg'},
  {id : '11', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'No Country for Old Men',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/no-country-for-old-men.jpg'},
  {id : '12', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Snatch',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/snatch.jpg'},
  {id : '13', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Moonrise Kingdom',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/moonrise-kingdom.jpg'},
  {id : '14', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Seven Years in Tibet',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/seven-years-in-tibet.jpg'},
  {id : '15', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Midnight Special',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/midnight-special.jpg'},
  {id : '16', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'War of the Worlds',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/war-of-the-worlds.jpg'},
  {id : '17', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Dardjeeling Limited',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/dardjeeling-limited.jpg'},
  {id : '18', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Orlando',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/orlando.jpg'},
  {id : '19', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Mindhunter',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/mindhunter.jpg'},
  {id : '20', genre:'dfgdfg',description:'gdfgd',video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name:'Midnight Special',
    date: randomDate(new Date(2012, 0, 1), new Date()),
    img:'img/midnight-special.jpg'},
];

export const Raiting:IRating[] = [
  {
    Raiting:'10'
  },
  {
    Raiting:'9'
  },
  {
    Raiting:'8'
  },
  {
    Raiting:'7'
  },
  {
    Raiting:'6'
  },
  {
    Raiting:'5'
  },
  {
    Raiting:'4'
  },
  {
    Raiting:'3'
  },
  {
    Raiting:'2'
  },
  {
    Raiting:'1'
  },
];
