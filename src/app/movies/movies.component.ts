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
  length : number = 0;
  imageUrl = "";

  constructor(private movieService : MoviesService){
    console.log(this.moviesList);
  }

  ngOnInit() : void{
    this.loadMovies();
  }

  loadMovies() : void{
    this.movieService.getAllMovies().subscribe(movies => {
      this.moviesList = movies.results;

      this.moviesList.forEach(element => {
        element.poster_path = "https://image.tmdb.org/t/p/original".concat(element.poster_path);
        console.log(element.poster_path)
      });
      this.length = this.moviesList.length;
      console.log(this.moviesList.slice(0,5));
      console.log(this.moviesList.slice(5,10));
    });
  }
}
