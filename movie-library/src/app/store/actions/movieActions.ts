
/**
 * Created by ahaq on 10/8/2017.
 */
import {Action} from "@ngrx/store";
import {Movie} from "../../models/movie";


export const ADD_MOVIE =             'Add Movie';
export const ADD_MOVIE_SUCCESS =     'Add Movie Success';
export const ADD_MOVIE_FAIL =        'Add Movie Fail';
export const UPDATE_MOVIE =             'Updaate Movie';
export const UPDATE_MOVIE_SUCCESS =     'Updaate Movie Success';
export const UPDATE_MOVIE_FAIL =        'Updaate Movie Fail';
export const REMOVE_MOVIE =          'Remove Movie';
export const REMOVE_MOVIE_SUCCESS =  'Remove Movie Success';
export const REMOVE_MOVIE_FAIL =     'Remove Movie Fail';
export const LOAD =                 'Load';
export const LOAD_SUCCESS =         'Load Success';
export const LOAD_FAIL =            'Load Fail';

export const SEARCH_MOVIE =           'Search Movie';
export const SEARCH_MOVIE_COMPLETE =  'Search Movie Complete';
export const LOAD_MOVIE =             'Load Movie' ;
export const SELECT_MOVIE =           'Select Movie';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchMovieAction implements Action {
  readonly type = SEARCH_MOVIE;

  constructor(public payload: string) { }
}

export class SearchMovieCompleteAction implements Action {
  readonly type = SEARCH_MOVIE_COMPLETE;

  constructor(public payload: Movie[]) { }
}

export class LoadMovieAction implements Action {
  readonly type = LOAD_MOVIE;

  constructor(public payload: Movie) { }
}

export class SelectMovieAction implements Action {
  readonly type = SELECT_MOVIE;

  constructor(public payload: string) { }
}

/**
 * Load Movies Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Movie[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

/**
 * Add Movie Actions
 */
export class AddMovieAction implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: Movie) { }
}

export class AddMovieSuccessAction implements Action {
  readonly type = ADD_MOVIE_SUCCESS;

  constructor(public payload: Movie) { }
}

export class AddMovieFailAction implements Action {
  readonly type = ADD_MOVIE_FAIL;

  constructor(public payload: Movie) { }
}

/**
 * Update Movie Actions
 */
export class UpdateMovieAction implements Action {
  readonly type = UPDATE_MOVIE;

  constructor(public payload: Movie) { }
}

export class UpdateMovieSuccessAction implements Action {
  readonly type = UPDATE_MOVIE_SUCCESS;

  constructor(public payload: Movie) { }
}

export class UpdateMovieFailAction implements Action {
  readonly type = UPDATE_MOVIE_FAIL;

  constructor(public payload: Movie) { }
}

/**
 * Remove Movie Actions
 */
export class RemoveMovieAction implements Action {
  readonly type = REMOVE_MOVIE;

  constructor(public payload: Movie) { }
}

export class RemoveMovieSuccessAction implements Action {
  readonly type = REMOVE_MOVIE_SUCCESS;

  constructor(public payload: Movie) { }
}

export class RemoveMovieFailAction implements Action {
  readonly type = REMOVE_MOVIE_FAIL;

  constructor(public payload: Movie) {}
}

export type Actions
  = SearchMovieAction
  | SearchMovieCompleteAction
  | LoadMovieAction
  | SelectMovieAction
  | AddMovieAction
  | AddMovieSuccessAction
  | AddMovieFailAction
  | RemoveMovieAction
  | RemoveMovieSuccessAction
  | RemoveMovieFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;


