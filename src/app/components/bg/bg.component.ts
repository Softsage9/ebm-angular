import {Component} from '@angular/core';

@Component({
  selector: 'app-bg',
  standalone: true,
  imports: [],
  templateUrl: './bg.component.html',
  styleUrl: './bg.component.css'
})
export class BgComponent {
  public bgImagePath: string = '../../../assets/img/bg-1.svg';
}
