/**
 * Created by ahaq on 10/8/2017.
 */
import {RouterModule, Routes} from '@angular/router';

import {MovieListComponent} from "./containerComponents/movie-list/movie-list.component";
import {MovieViewPageComponent} from "./containerComponents/movie-view-page/movie-view-page.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: MovieListComponent
  },
  {
    path: 'movie/:title',
    component: MovieViewPageComponent
  },
  {
    path: 'add',
    component: MovieViewPageComponent
  }
  // ,
  // {
  //   path: 'book/find',
  //   component: FindBookPageComponent
  // },
  // {
  //   path: 'book/:id',
  //   canActivate: [ BookExistsGuard ],
  //   component: ViewBookPageComponent
  // },
  // {
  //   path: '**',
  //   component: NotFoundPageComponent
  // }
];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
