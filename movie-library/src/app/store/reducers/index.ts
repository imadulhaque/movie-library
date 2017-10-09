/**
 * Created by ahaq on 10/8/2017.
 */
import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromSearchMovie from './searchReducer';
import * as fromMovies from './movieReducer';
import * as fromAllMovies from './moviesReducer';

export interface State {
  allMovies: fromAllMovies.State;
  search: fromSearchMovie.State;
  movies: fromMovies.State;
}

const reducers = {
  allMovies: fromAllMovies.reducer,
  movies: fromMovies.reducer,
  search: fromSearchMovie.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getMoviesState = (state: State) => state.movies;

export const getMovieEntities = createSelector(getMoviesState, fromMovies.getEntities);
export const getMovieTitles = createSelector(getMoviesState, fromMovies.getTitles);
export const getSelectedMovieTitle = createSelector(getMoviesState, fromMovies.getSelectedTitle);
export const getSelectedMovie = createSelector(getMoviesState, fromMovies.getSelected);

export const getSearchState = (state: State) => state.search;

export const getSearchMovieTitles = createSelector(getSearchState, fromSearchMovie.getTitles);
export const getSearchQuery = createSelector(getSearchState, fromSearchMovie.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearchMovie.getLoading);

export const getSearchResults = createSelector(getMovieEntities, getSearchMovieTitles, (movies, searchTitles) => {
  return searchTitles.map(title => movies[title]);
});


export const getCollectionState = (state: State) => state.allMovies;

export const getAllMoviesLoaded = createSelector(getCollectionState, fromAllMovies.getLoaded);
export const getAllMoviesLoading = createSelector(getCollectionState, fromAllMovies.getLoading);
export const getAllMovieTitles = createSelector(getCollectionState, fromAllMovies.getTitles);

export const getAllMovies = createSelector(getMovieEntities, getAllMovieTitles, (entities, titles) => {
  return titles.map(title => entities[title]);
});

export const isSelectedMovieInCollection = createSelector(getAllMovieTitles, getSelectedMovieTitle, (titles, selected) => {
  return titles.indexOf(selected) > -1;
});

