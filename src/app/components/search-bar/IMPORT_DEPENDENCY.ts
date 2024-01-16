import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from "@angular/common";


export const IMPORT_DEPENDENCY = [MatInputModule, MatIconModule, MatButtonModule, MatAutocompleteModule, AsyncPipe, FormsModule, ReactiveFormsModule, NgStyle];
