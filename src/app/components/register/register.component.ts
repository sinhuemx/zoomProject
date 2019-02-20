import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';
import { AlertSuccessComponent } from '../alerts/alert-success/alert-success.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

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
        this._router.navigate(['/login'])
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
