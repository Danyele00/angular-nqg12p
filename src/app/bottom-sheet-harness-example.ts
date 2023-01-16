import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';

/**
 * @title Testing with MatBottomSheetHarness
 */
@Component({
  selector: 'bottom-sheet-harness-example',
  templateUrl: 'bottom-sheet-harness-example.html',
})
export class BottomSheetHarnessExample {
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(readonly bottomSheet: MatBottomSheet) {}

  open(config?: MatBottomSheetConfig) {
    return this.bottomSheet.open(this.template, config);
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */