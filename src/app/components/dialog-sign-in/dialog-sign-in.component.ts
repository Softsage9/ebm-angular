import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from './IMPORT_DEPENDENCY';

@Component({
  selector: 'app-dialog-sign-in',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './dialog-sign-in.component.html',
  styleUrl: './dialog-sign-in.component.css'
})
export class DialogSignInComponent {

}
