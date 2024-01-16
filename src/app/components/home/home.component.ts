import { Component } from '@angular/core';
import {IMPORT_DEPENDENCY} from "./IMPORT_DEPENDENCY";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public illusHome: string = '../../../assets/img/illus-home.svg'
}
