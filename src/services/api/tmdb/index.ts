import { singleton } from "tsyringe";

@singleton()
export class TmdbApiService {
    private readonly baseUrl = "https://api.themoviedb.org/3";
    private readonly apiKey = "00769e11c3cd17eb5317e3be20ccc9c1";

    public search(term: string, lang: string) {
        console.log(lang);

        fetch(
            `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${lang}
      &query=${term}&page=1&include_adult=false`
        )
            .then((r) => r.json())
            .then((d) =>
                d.results.forEach((m: any) =>
                    console.log(`${m.title}: ${m.overview}`)
                )
            );
    }
}
