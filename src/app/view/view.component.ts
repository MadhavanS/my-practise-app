import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movies } from '../models/movies.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [MoviesService]
})
export class ViewComponent implements OnInit {
  selectedMovie: Movies;
  
  constructor() {}

  ngOnInit() {}
}
