import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  get id() {
    return this.movie.id;
  }

  get title() {
    return this.movie.title;
  }

  get year() {
    return this.movie.year;
  }

  get genre() {
    return this.movie.genre;
  }

  get actors() {
    return this.movie.actors;
  }

  get poster(): string | boolean {
    if (this.movie.poster) {
      return this.movie.poster;
    }
    return false;
  }

}
