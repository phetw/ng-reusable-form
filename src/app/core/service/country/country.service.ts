import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { ICountry } from "../../model/country.model"
import { Observable } from "rxjs"
import { tap, map } from "rxjs/operators"

@Injectable({
  providedIn: "root",
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountryList(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>("https://restcountries.eu/rest/v2").pipe(
      tap(result => {
        console.log(result)
      })
    )
  }
}
