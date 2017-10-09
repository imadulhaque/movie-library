import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Movie} from "../../models/movie";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../store/reducers';
import * as movieActions from '../../store/actions/movieActions';

@Component({
  selector: 'app-selected-movie-page',
  templateUrl: './selected-movie-page.component.html',
  styleUrls: ['./selected-movie-page.component.css']
})
export class SelectedMoviePageComponent implements OnInit {
  movie$: Observable<Movie>;
  isSelectedMovieInCollection$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) {
    this.movie$ = store.select(fromRoot.getSelectedMovie);
    this.isSelectedMovieInCollection$ = store.select(fromRoot.isSelectedMovieInCollection);
  }

  ngOnInit() {
  }

  addToCollection(movie: Movie) {
    this.store.dispatch(new movieActions.AddMovieAction(movie));
  }

  removeFromCollection(movie: Movie) {
    this.store.dispatch(new movieActions.RemoveMovieAction(movie));
  }
}
