import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from './IMPORT_DEPENDENCY';

@Component({
  selector: 'app-frame3',
  standalone: true,
  imports: [IMPORT_DEPENDENCY], 
  templateUrl: './frame3.component.html',
  styleUrl: './frame3.component.css'
})
export class Frame3Component {
  public icIndependant: string = '../../../assets/img/ic-independant.svg';
  public icDoctor: string = '../../../assets/img/ic-doctor.svg';
  public icNotebook: string = '../../../assets/img/ic-notebook.svg';
  public union: string = '../../../assets/img/union-1.svg';
  public vector: string = '../../../assets/img/vector-58.svg';
  public propertyVariant: string = '../../../assets/img/property-1-variant2-3.png';
  public rectangle211: string = '../../../assets/img/rectangle-2-11.png';
  public rectangle27: string = '../../../assets/img/rectangle-2-7.png';
  public rectangle29: string = '../../../assets/img/rectangle-2-9.png';
  public rectangle28: string = '../../../assets/img/rectangle-2-8.png';
  public arrow1121: string = '../../../assets/img/arrow-11-2-1.svg';
  public arrow112: string = '../../../assets/img/arrow-11-2.svg';
  public logo: string = '../../../assets/img/logo.svg';
  public icContexttualise: string = '../../../assets/img/ic-contextualise.svg';

  public text: string = 'Voir toutes les actus'
}
