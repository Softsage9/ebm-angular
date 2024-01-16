import { Component } from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-introductory-text',
  standalone: true,
  imports: [
    SearchBarComponent
  ],
  templateUrl: './introductory-text.component.html',
  styleUrl: './introductory-text.component.css'
})
export class IntroductoryTextComponent {
}
