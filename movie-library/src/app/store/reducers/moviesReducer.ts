/**
 * Created by ahaq on 10/8/2017.
 */
import * as movieActions from '../actions/movieActions';
export interface State {
  loaded: boolean;
  loading: boolean;
  titles: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  titles: []
};

export function reducer(state = initialState, action: movieActions.Actions): State {
  switch (action.type) {
    case movieActions.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case movieActions.LOAD_SUCCESS: {
      const movies = action.payload;

      return {
        loaded: true,
        loading: false,
        titles: movies.map(movie => movie.title)
      };
    }

    case movieActions.ADD_MOVIE_SUCCESS:
    case movieActions.REMOVE_MOVIE_FAIL: {
      const movie = action.payload;

      if (state.titles.indexOf(movie.title) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        titles: [ ...state.titles, movie.title ]
      });
    }

    case movieActions.REMOVE_MOVIE_SUCCESS:
    case movieActions.ADD_MOVIE_FAIL: {
      const movie = action.payload;

      return Object.assign({}, state, {
        titles: state.titles.filter(title => title !== movie.title)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getTitles = (state: State) => state.titles;
