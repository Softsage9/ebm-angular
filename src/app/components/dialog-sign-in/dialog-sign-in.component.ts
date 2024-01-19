import { Component } from '@angular/core';
import { IMPORT_DEPENDENCY } from './IMPORT_DEPENDENCY';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sign-in',
  standalone: true,
  imports: [IMPORT_DEPENDENCY],
  templateUrl: './dialog-sign-in.component.html',
  styleUrl: './dialog-sign-in.component.css'
})
export class DialogSignInComponent {
  constructor(public dialogRef: MatDialogRef<DialogSignInComponent>) {}

  onConnectClick(): void {
    // Close the dialog
    this.dialogRef.close();

    // Call the function to display the image
    this.displayImage();
  }

  displayImage(): void {
    const image = document.createElement('img');
    image.src = '../../../assets/img/d2236169-d62e-4dad-a213-7a52a9d4e335.png'; // Set the image source
    image.style.position = 'fixed';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%, -50%)';
    image.style.zIndex = '1000'; // Ensure it's above other content
  
    document.body.appendChild(image);
  }

}
