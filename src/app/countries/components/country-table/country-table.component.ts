import { Component, Input, input } from '@angular/core';
import { Country } from '../../interfaces/by-capital.interfaces';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  #country-flag {
    height: 25px
  }
  `
})
export class CountryTableComponent {

   @Input()
   public countries: Country[] = [];

}
