import { Component } from '@angular/core';
import {IMPORT_DEPENDENCY} from "./IMPORT_DEPENDENCY";

@Component({
  selector: 'app-dialog-search',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './dialog-search.component.html',
  styleUrl: './dialog-search.component.css'
})
export class DialogSearchComponent {

}
