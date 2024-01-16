import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {MedicalSpecialtiesComponent} from "../medical-specialties/medical-specialties.component";
import {MatIconModule} from "@angular/material/icon";
import { TagsComponent } from "../tags/tags.component";

export const IMPORT_DEPENDENCY = [
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatButtonModule,
  MatDialogClose,
  SearchBarComponent,
  MedicalSpecialtiesComponent,
  MatIconModule,
  TagsComponent
]
