import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule
} from '@angular/material';
@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule
  ]
})
export class AppMaterialModule { }
