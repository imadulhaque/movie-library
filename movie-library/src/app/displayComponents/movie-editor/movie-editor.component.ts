import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/movie";
import {MdCardImage} from "@angular/material";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
  @Input() movie: Movie;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<Movie>();
  @Output() remove = new EventEmitter<Movie>();
  movieForm: FormGroup;
  isEdit = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    if (this.movie && this.movie.title && this.movie.year) {
      this.movieForm = this.formBuilder.group({
        title: [{value: this.movie.title, disabled: !this.isEdit}, Validators.required],
        year: [{value: this.movie.year, disabled: !this.isEdit}, Validators.required],
        genre: [{value: this.movie.genre, disabled: !this.isEdit}, Validators.required],
        poster: {value: this.movie.poster, disabled: !this.isEdit},
        actors: {value: this.movie.actors.join(', '), disabled: !this.isEdit}
      });
    } else {
      this.isEdit = true;
      this.movieForm = this.formBuilder.group({
        title: ['', Validators.required],
        year: ['', Validators.required],
        genre: ['', Validators.required],
        poster: '',
        actors: ''
      });
    }
  }

  save(data) {
    if (this.movie) {
      if (!this.isEdit) {
        this.remove.emit(this.movie);
        this.router.navigate(['home']);
      } else {
        const movieUpdated = Object.assign({}, this.movie);
        movieUpdated.title = this.movieForm.value.title;
        movieUpdated.year = this.movieForm.value.year;
        movieUpdated.genre = this.movieForm.value.genre;
        movieUpdated.poster = this.movieForm.value.poster;
        movieUpdated.actors = this.movieForm.value.actors.split(',');
        this.add.emit(movieUpdated);
        this.router.navigate(['home']);
      }
    } else {
      const m = new Movie();
      m.title = this.movieForm.value.title;
      m.year = this.movieForm.value.year;
      m.genre = this.movieForm.value.genre;
      m.poster = this.movieForm.value.poster;
      m.actors = this.movieForm.value.actors.split(',');
      this.add.emit(m);
      this.router.navigate(['home']);
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }

  enableForm() {
    this.movieForm.controls.title.enable();
    this.movieForm.controls.year.enable();
    this.movieForm.controls.genre.enable();
    this.movieForm.controls.poster.enable();
    this.movieForm.controls.actors.enable();
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

  get poster() {
    if (this.movie.poster) {
      return this.movie.poster;
    } else {
      return 'http://via.placeholder.com/100x100';
    }
  }
}
