import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  @Output() sizeFilterClickedEvent = new EventEmitter<string>();

  sizeClicked(value: string) {
    this.sizeFilterClickedEvent.emit(value);
  }

  @Output() nameSearchedClickedEvent = new EventEmitter<string>();

  nameSearched(value: string) {
    this.nameSearchedClickedEvent.emit(value);
  }

  @Output() colorFilterClickedEvent = new EventEmitter<string>();

  colorClicked(value: string) {
    this.colorFilterClickedEvent.emit(value);
  }


  @Output() showResultsClickEvent = new EventEmitter<string>();

  showResults() {
    this.showResultsClickEvent.emit();
  }

  @Output() seasonFilterClickedEvent = new EventEmitter<string>();


  seasonClicked(value: string) {
    this.seasonFilterClickedEvent.emit(value);
  }

  @Output() categoryFilterClickedEvent = new EventEmitter<string>();


  categoryClicked(value: string) {
    this.categoryFilterClickedEvent.emit(value);
  }
}
