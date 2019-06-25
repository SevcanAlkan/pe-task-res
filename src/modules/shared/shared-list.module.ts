import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
      MatPaginatorModule,
      MatTableModule
  ]
})
export class SharedListModule { }
