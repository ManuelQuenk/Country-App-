import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/by-capital.interfaces';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor( public countriesService: CountriesService ) { }

  public countries: Country[] = []
  public isLoading: boolean = false

  searchByCountry(query: string): void {

    this.isLoading = true

    this.countriesService.searchCountry(query)
      .subscribe(
        queryset => {
          this.countries = queryset
          this.isLoading = false
        }
      )
  }


}
