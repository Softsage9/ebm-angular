import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from './IMPORT_DEPENENDCY';

@Component({
  selector: 'app-contenus',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './contenus.component.html',
  styleUrl: './contenus.component.css'
})
export class ContenusComponent {
  public logo: string = '../../../assets/img/logo.svg'
  public icContextualise: string = '../../../assets/img/ic-contextualise.svg'
  
}
