import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit, OnDestroy {


  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public inputValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(400),
      )
      .subscribe(
        value => {
          this.emitInputValue(value)
        }
       )
  }

  @Input()
  public initialValue: string = ''

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitInputValue(value: string): void {
    this.inputValue.emit(value);
  }

  onKeyPress( searchTerm: string ) {
    this.debouncer.next( searchTerm )
  }

}
