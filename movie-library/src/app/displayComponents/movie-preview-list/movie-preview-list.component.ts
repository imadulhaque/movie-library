import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-preview-list',
  templateUrl: './movie-preview-list.component.html',
  styleUrls: ['./movie-preview-list.component.css']
})
export class MoviePreviewListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() query = '';
  constructor() { }

  ngOnInit() {
  }

}
