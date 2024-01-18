import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from './IMPORT_DEPENDENCY';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public line: string = '../../../assets/img/line-15-2.svg';
  public logoCmg: string = '../../../assets/img/logo-cmg-2023.svg';
  public logoEmb: string = '../../../assets/img/logo-emb.svg';
  public frame612: string = '../../../assets/img/frame-612.svg';
 


}
