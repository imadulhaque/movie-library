import { Injectable } from '@angular/core';
import {IMovie, Movie} from '../models/movie';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];
  private _serverUrl = 'http://localhost:3000/';
  constructor(private http: Http) {
  }

  getMovies(filter?): Observable<IMovie[]> {
    console.log('MovieService.getMovies');
    console.log('filter value is ' + filter);
    if (filter && filter !== '') {
      return this.http.get(this._serverUrl + 'movies').map(res => this.extractData(res))
        .map(movies => {
          return movies.filter(function(m) {
            console.log('filter value is ' + filter + ' m.title ' + m.title);
            if (m.title.indexOf(filter) > -1) {
              return true;
            }
          });
        });
    }
    return this.http.get(this._serverUrl + 'movies').map(res => this.extractData(res));
  }

  addMovie(movie: IMovie): Observable<IMovie> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers});
    return this.http.post(this._serverUrl + 'movies', movie, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateMovie(movie: IMovie): Observable<IMovie> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers});
    return this.http.put(this._serverUrl + 'movies', movie, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteMovie(movie: IMovie): Observable<IMovie> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers});
    return this.http.delete(this._serverUrl + 'movies' + '/' + movie.id)
      .map((res) => movie)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private extractData(res) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

}
