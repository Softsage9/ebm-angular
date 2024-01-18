import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from './IMPORT_DEPENDENCY';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public ambassadeur: string = '../../../assets/img/illus-ambassadeur.svg'

}
