/**
 * Created by ahaq on 10/8/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {defer} from "rxjs/observable/defer";
import {Action} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {Movie} from "../../models/movie";
import * as movieActions from '../actions/movieActions';
import {MovieService} from "../../services/movie.service";
import {empty} from "rxjs/observable/empty";

@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions, private movieService: MovieService) { }

  @Effect()
  loadMovies$: Observable<Action> = this.actions$
    .ofType(movieActions.LOAD)
    .startWith(new movieActions.LoadAction())
    .switchMap(() =>
      this.movieService.getMovies()
        .map((movies: Movie[]) => new movieActions.LoadSuccessAction(movies))
        .catch(error => of(new movieActions.LoadFailAction(error)))
    );

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(movieActions.SEARCH_MOVIE)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      // if (query === '') {
      //   return empty();
      // }

      const nextSearch$ = this.actions$.ofType(movieActions.SEARCH_MOVIE).skip(1);

      return this.movieService.getMovies(query)
        .takeUntil(nextSearch$)
        .map(movies => new movieActions.SearchMovieCompleteAction(movies))
        .catch(() => of(new movieActions.SearchMovieCompleteAction([])));
    });

  @Effect()
  addMovie$: Observable<Action> = this.actions$
    .ofType(movieActions.ADD_MOVIE)
    .map((action: movieActions.AddMovieAction) => action.payload)
    .mergeMap(movie =>
      this.movieService.addMovie(movie)
        .map(() => new movieActions.AddMovieSuccessAction(movie))
        .catch(() => of(new movieActions.AddMovieFailAction(movie)))
    );

  @Effect()
  updateMovie$: Observable<Action> = this.actions$
    .ofType(movieActions.ADD_MOVIE)
    .map((action: movieActions.UpdateMovieAction) => action.payload)
    .mergeMap(movie =>
      this.movieService.updateMovie(movie)
        .map(() => new movieActions.UpdateMovieSuccessAction(movie))
        .catch(() => of(new movieActions.UpdateMovieFailAction(movie)))
    );

  @Effect()
  removeMovie$: Observable<Action> = this.actions$
    .ofType(movieActions.REMOVE_MOVIE)
    .map((action: movieActions.RemoveMovieAction) => action.payload)
    .mergeMap(movie =>
      this.movieService.deleteMovie(movie)
        .map(() => new movieActions.RemoveMovieSuccessAction(movie))
        .catch(() => of(new movieActions.RemoveMovieFailAction(movie)))
    );

}
