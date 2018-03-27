import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Movie} from "../../models/movie";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../store/reducers';
import * as movieActions from '../../store/actions/movieActions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: []
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  searchQuery$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.movies$ = this.store.select(fromRoot.getSearchResults);
    this.searchQuery$ = this.store.select(fromRoot.getSearchQuery).take(1);
    this.loading$ = this.store.select(fromRoot.getSearchLoading);
  }

  ngOnInit() {
    this.store.dispatch(new movieActions.SearchMovieAction(''));
  }

  search(query: string) {
    this.store.dispatch(new movieActions.SearchMovieAction(query));
  }
}
