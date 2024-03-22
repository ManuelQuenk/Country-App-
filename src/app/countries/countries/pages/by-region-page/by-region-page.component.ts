import { Component } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../interfaces/by-capital.interfaces';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService ) { }

  public region: Country[] = [];

  searchByRegion(query: string): void {
    this.countriesService.searchRegion(query)
      .subscribe(
        regions => {
          this.region = regions
        }
      )
  }

}
