import { Component, signal } from '@angular/core';
import { IMPORT_DEPENDENCY } from "./IMPORT_DEPENDENCY";
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchComponent } from '../dialog-search/dialog-search.component';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public logoPath: string = '../../../assets/img/logo-emb-large-rvb-1.svg';
  public searchIconPath: string = '../../../assets/img/search.svg';
  public userIconPath: string = '../../../assets/img/user-non-logge.svg';
  public subheaderPath: string = '../../../assets/img/subheader.svg';

  constructor(public dialog: MatDialog) { }

  public openDialogSeach(): void {
    const dialogRef = this.dialog.open(DialogSearchComponent, {
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openDialogSignIn(): void {
    const dialogSignInRef = this.dialog.open(DialogSignInComponent, {
      width: '500px',
      height: '580px'
    });
    
    dialogSignInRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

