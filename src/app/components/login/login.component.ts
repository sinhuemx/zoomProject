import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router'; 
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AlertSuccessComponent } from '../alerts/alert-success/alert-success.component';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginUserData = {}
  
  constructor(private _auth: AuthService,
              private _router: Router,
              public dialog: MatDialog,
              public snackBar: MatSnackBar
              ) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.snackBar.openFromComponent(AlertSuccessComponent, {
            });
          } 
        }
      }
    )
  }
  
}
 
