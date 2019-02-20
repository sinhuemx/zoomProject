import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatDialogModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatSnackBarModule
    
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }
