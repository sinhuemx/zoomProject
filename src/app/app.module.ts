import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { MenuComponent, BottomSheetOverviewExampleSheet } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { FlyersComponent } from './components/flyers/flyers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertSuccessComponent } from './components/alerts/alert-success/alert-success.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UsersComponent,
    CatalogsComponent,
    HeaderComponent,
    DataTableComponent,
    BottomSheetOverviewExampleSheet,
    FlyersComponent,
    HomeComponent,
    AlertSuccessComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBottomSheetModule,
    MatSnackBarModule
  ],
  providers: [AuthService, AuthGuard, EventService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
  {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
],
  entryComponents: [BottomSheetOverviewExampleSheet, AlertSuccessComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
