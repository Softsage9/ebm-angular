import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-specialties-images',
  standalone: true,
  imports: [],
  templateUrl: './medical-specialties-images.component.html',
  styleUrl: './medical-specialties-images.component.css'
})
export class MedicalSpecialtiesImagesComponent {
  public steto: string = '../../../assets/img/steto.png';
  public clap: string = '../../../assets/img/clap.svg';
}
