import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import { MovieListComponent } from './containerComponents/movie-list/movie-list.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RouterStoreModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import { reducer } from './store/reducers';
import {MovieEffects} from "./store/effects/movieEffects";
import {MovieService} from "./services/movie.service";

import { MovieSearchComponent } from './displayComponents/movie-search/movie-search.component';
import { MoviePreviewListComponent } from './displayComponents/movie-preview-list/movie-preview-list.component';
import { MoviePreviewComponent } from './displayComponents/movie-preview/movie-preview.component';
import { MovieActorsComponent } from './displayComponents/movie-actors/movie-actors.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatchPipe} from "./pipes/match.pipe";
import { MovieViewPageComponent } from './containerComponents/movie-view-page/movie-view-page.component';
import {MovieEditorComponent} from "./displayComponents/movie-editor/movie-editor.component";
import {SelectedMoviePageComponent} from "./containerComponents/selected-movie-page/selected-movie-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieSearchComponent,
    MoviePreviewListComponent,
    MoviePreviewComponent,
    MovieActorsComponent,
    MatchPipe,
    MovieEditorComponent,
    MovieViewPageComponent,
    SelectedMoviePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer), //    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(MovieEffects),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
