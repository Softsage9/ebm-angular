import { Component } from '@angular/core';
import {IMPORT_DEPENDENCY} from "./IMPORT_DEPENDENCY";

@Component({
  selector: 'app-medical-specialties',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './medical-specialties.component.html',
  styleUrl: './medical-specialties.component.css'
})
export class MedicalSpecialtiesComponent {

}
