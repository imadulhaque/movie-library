import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
  }

}
