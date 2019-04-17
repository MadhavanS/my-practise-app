import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movies } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private moviesList: Movies[];
  @Output() movieWasSelected = new EventEmitter<Movies>();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesList = this.moviesService.getMovies();
  }

  onMovieSelected(movie: Movies) {
    console.log(movie.name);
    this.movieWasSelected.emit(movie);
  }

  onDetailClicked(movie: Movies) {
    console.log(movie.name);
    this.movieWasSelected.emit(movie);
  }

  onCastClicked(movie: Movies) {
    console.log(movie.name);
    this.movieWasSelected.emit(movie);
  }
}
