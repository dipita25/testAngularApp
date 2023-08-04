import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { Observable, of } from 'rxjs';
import { Movieresult } from '../movieresult';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  moviesList : Movie[] = [];
  movieResult ?: Movieresult;

  constructor(private movieService : MoviesService){
    console.log(this.moviesList);
  }

  ngOnInit() : void{
    this.loadMovies();
  }

  loadMovies() : void{
    this.movieService.getAllMovies().subscribe(movies => {
      this.moviesList = movies.results;
      console.log(typeof(movies));
      console.log(this.moviesList);
    });
  }
}
