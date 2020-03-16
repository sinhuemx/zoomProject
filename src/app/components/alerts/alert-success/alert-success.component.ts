import {Component, Inject} from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css'],
})
export class AlertSuccessComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
