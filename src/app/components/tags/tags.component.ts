import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from "./IMPORT_DEPENDENCY";

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    IMPORT_DEPENDENCY,
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
}
