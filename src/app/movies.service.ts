import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movieresult } from './movieresult';
import { MovieDetailResult } from './movie-detail-result';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  id : number = 0;
  urlAllMovies = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  urlGetMovieById = "https://api.themoviedb.org/3/movie/" + this.id + "?language=fr-FR";
  bearerToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjAyZDY4YjBjY2M3MzdmZWFlZjdhMDJjZWRkMzU0NCIsInN1YiI6IjY0Y2M2NmQyNDNjZDU0MDBjNTI2ZmU3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3_wx3OF2d9UIUeMyaqQ9zHzheArSdKii9itPtS489LU";
  movieResult ?: Movieresult;

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: this.bearerToken
    }
  };

  constructor(private http: HttpClient) { }

  ngOnInit() : void{
    this.getAllMovies();
  }

  getAllMovies() : Observable<Movieresult>{
    return this.http.get<Movieresult>(this.urlAllMovies, this.options);
  }

  getMovieById(id : number) : Observable<MovieDetailResult>{
    this.id = id;
    console.log(this.urlGetMovieById);
    this.urlGetMovieById = "https://api.themoviedb.org/3/movie/" + this.id + "?language=fr-FR";
    console.log(this.urlGetMovieById);
    return this.http.get<MovieDetailResult>(this.urlGetMovieById, this.options);
  }
}
