import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import {MatButtonModule} from '@angular/material/button';


export const IMPORT_DEPENDENCY = [MatFormFieldModule, MatInputModule, MatIconModule, CommonModule, SearchBarComponent, MatButtonModule]