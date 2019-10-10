import { Component, OnInit } from "@angular/core";
import { MovieService } from "./services/movie.service";
import { PopularMovies } from "./shared/models/popular-movies.model";
import { Movie } from "./shared/models/movie.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public movieList: Movie[];
  movieIdList: number[] = [];
  // public showMovie: Movie[];
  actualPage: number;

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this._movieService.getPopularMovies().subscribe((data: any) => {
      let movies: PopularMovies[] = data.results.slice(0, 5);
      movies.forEach((item, index, array) => {
        this.movieIdList.push(item.id);
      });
    });
  }
}
