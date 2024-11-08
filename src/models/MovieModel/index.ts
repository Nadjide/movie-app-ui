import { MovieDto } from "../../services/api/tmdb/dto";

export class MovieModel {
  public constructor(
    public readonly id: number,
    public readonly originalLanguage: string,
    public readonly originalTitle: string,
    public readonly overview: string,
    public readonly popularity: number,
    public readonly posterPath: string | null,
    public readonly releaseDate: Date,
    public readonly title: string,
    public readonly voteAverage: number,
    public readonly voteCount: number
  ) {}

  public static fromDto(dto: MovieDto): MovieModel {
    return new MovieModel(
      dto.id,
      dto.original_language,
      dto.original_title,
      dto.overview,
      dto.popularity,
      dto.poster_path ? dto.poster_path : null, // Handle null posterPath
      new Date(dto.release_date),
      dto.title,
      dto.vote_average,
      dto.vote_count
    );
  }

  // Example of a method to format the release date
  public getFormattedReleaseDate(): string {
    return this.releaseDate.toLocaleDateString();
  }
}   