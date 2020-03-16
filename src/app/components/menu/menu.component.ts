import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent {
  public bottomSheetRef: any;
  constructor(private bottomSheet: MatBottomSheet,
    private _router: Router) {
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    this._router.navigate(['/login'])
  }
}
@Component({
  selector: 'sheet-modal',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
}
