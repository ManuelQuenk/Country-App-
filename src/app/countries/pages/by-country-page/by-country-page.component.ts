import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/by-capital.interfaces';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  constructor( public countriesService: CountriesService ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
    this.initialValue = this.countriesService.cacheStore.byCountries.term
  }

  public countries: Country[] = []
  public isLoading: boolean = false
  public initialValue: string = '';

  searchByCountry(term: string): void {

    this.isLoading = true

    this.countriesService.searchCountry(term)
      .subscribe(
        queryset => {
          this.countries = queryset
          this.isLoading = false
        }
      )
  }


}
