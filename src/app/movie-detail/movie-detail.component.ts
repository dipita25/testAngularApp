import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { MovieDetailResult } from '../movie-detail-result';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  id : number;
  movie = {} as MovieDetailResult;

  constructor(private routes : ActivatedRoute, private location : Location, private movieService : MoviesService){
    console.log(routes.snapshot.paramMap.get('id'));
    this.id = Number(routes.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit() : void{
    this.getMovieById(this.id);
    console.log(this.id);
  }

  getMovieById(id : number) : void{
    console.log(this.id);
    this.movieService.getMovieById(id).subscribe(movie =>{
      this.movie = movie;
      console.log(movie);
    });
  }

  goBack() : void{
    this.location.back();
  }
}
