/**
 * Created by ahaq on 10/8/2017.
 */
import * as movieActions from '../actions/movieActions';

export interface State {
  titles: string[];
  loading: boolean;
  query: string;
}

const initialState: State = {
  titles: [],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: movieActions.Actions): State {
  switch (action.type) {
    case movieActions.SEARCH_MOVIE: {
      const query = action.payload;

      if (query === '') {
        return {
          titles: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case movieActions.SEARCH_MOVIE_COMPLETE: {
      const movies = action.payload;

      return {
        titles: movies.map(movie => movie.title),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}


export const getTitles = (state: State) => state.titles;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
