import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public inputValue = new EventEmitter<string>();

  emitInputValue(value: string): void {
    this.inputValue.emit(value);
  }

}
