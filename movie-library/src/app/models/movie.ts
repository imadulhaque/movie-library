/**
 * Created by ahaq on 10/8/2017.
 */
export interface IMovie {
  id: string;
  title: string;
  year: string;
  genre: string;
  poster: string;
  actors: string[];
}

export class Movie implements IMovie {
  id: string;
  title: string;
  year: string;
  genre: string;
  poster: string;
  actors: string[];

  constructor(id?, title?, year?, genre?, poster?, actors?) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.poster = poster;
    this.actors = actors;
  }
}
