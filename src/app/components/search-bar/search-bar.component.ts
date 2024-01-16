import { Component, OnInit, Input } from '@angular/core';
import { IMPORT_DEPENDENCY } from  './IMPORT_DEPENDENCY';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit{
  @Input() width: string = '100%';
  searchControl = new FormControl();
  options: string[] = [
    'pathologie',
    'symptôme',
    'thématique',
    'outil',
    'Allergologie',
    'Cancérologie',
    'Cardiologie, chirurgie vasculaire '
  ];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSearch(value: string): void {
    console.log('Searching for:', value);
  }
}
