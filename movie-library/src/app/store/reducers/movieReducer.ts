/**
 * Created by ahaq on 10/8/2017.
 */
import {Movie} from "../../models/movie";
import * as movieActions from '../actions/movieActions';
import {createSelector} from "reselect";

export interface State {
  titles: string[];
  entities: { [title: string]: Movie };
  selectedMovieTitle: string | null;
}

export const initialState: State = {
  titles: [],
  entities: {},
  selectedMovieTitle: null,
};

export function reducer(state = initialState, action: movieActions.Actions ): State {
  switch (action.type) {
    case movieActions.SEARCH_MOVIE_COMPLETE:
    case movieActions.LOAD_SUCCESS: {
      const movies = action.payload;
      const newMovies = movies.filter(movie => !state.entities[movie.title]);

      const newMovieTitles = newMovies.map(movie => movie.title);
      const newMovieEntities = newMovies.reduce((entities: { [title: string]: Movie }, movie: Movie) => {
        return Object.assign(entities, {
          [movie.title]: movie
        });
      }, {});

      return {
        titles: [ ...state.titles, ...newMovieTitles ],
        entities: Object.assign({}, state.entities, newMovieEntities),
        selectedMovieTitle: state.selectedMovieTitle
      };
    }

    case movieActions.LOAD_MOVIE: {
      const movie = action.payload;

      if (state.titles.indexOf(movie.title) > -1) {
        return state;
      }

      return {
        titles: [ ...state.titles, movie.title ],
        entities: Object.assign({}, state.entities, {
          [movie.title]: movie
        }),
        selectedMovieTitle: state.selectedMovieTitle
      };
    }

    case movieActions.SELECT_MOVIE: {
      return {
        titles: state.titles,
        entities: state.entities,
        selectedMovieTitle: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;

export const getTitles = (state: State) => state.titles;

export const getSelectedTitle = (state: State) => state.selectedMovieTitle;

export const getSelected = createSelector(getEntities, getSelectedTitle, (entities, selectedTitle) => {
  return entities[selectedTitle];
});

export const getAll = createSelector(getEntities, getTitles, (entities, titles) => {
  return titles.map(title => entities[title]);
});
