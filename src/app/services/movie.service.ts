import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Movie } from "../shared/models/movie.model";

@Injectable()
export class MovieService {
  private _baseUrl: string = environment.base_url_tmdb;
  private _apiKey: string = environment.tmdb_api_key;

  constructor(private _http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this._http.get(
      `${this._baseUrl}movie/popular?api_key=${this._apiKey}&language=en-US&page=1`
    );
  }

  getMovie(movieId: number): Observable<any> {
    return this._http.get(
      `${this._baseUrl}movie/${movieId}?api_key=${this._apiKey}&language=en-US`
    );
  }
}
