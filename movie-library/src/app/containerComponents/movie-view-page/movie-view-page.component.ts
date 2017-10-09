import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import * as fromRoot from '../../store/reducers';
import * as movieActions from '../../store/actions/movieActions';
import {Subscription} from "rxjs/Subscription";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-view-page',
  templateUrl: './movie-view-page.component.html',
  styleUrls: ['./movie-view-page.component.css']
})
export class MovieViewPageComponent implements OnInit {
  actionsSubscription: Subscription;
  constructor(store: Store<fromRoot.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .select<string>('title')
      .map(title => new movieActions.SelectMovieAction(title))
      .subscribe(store);
  }

  ngOnInit() {
  }

}
