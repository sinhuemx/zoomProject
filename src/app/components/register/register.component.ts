import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';
import { AlertSuccessComponent } from '../alerts/alert-success/alert-success.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  
  public hide = true;
  public matcher = new MyErrorStateMatcher();
  public registerUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router,
              public dialog: MatDialog,
              public snackBar: MatSnackBar
              ) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.registerUserData = res
        if( res instanceof HttpErrorResponse ) {
          if (res.status === 200) {
            this.snackBar.openFromComponent(AlertSuccessComponent, {
            });
          }
        }
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 304) {
            this.snackBar.openFromComponent(AlertSuccessComponent, {
            });
          }
        }
      }
    )
  }

}
