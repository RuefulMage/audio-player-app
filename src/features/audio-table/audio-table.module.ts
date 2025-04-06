import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioTableComponent } from './audio-table.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    AudioTableComponent
  ],
  exports: [
    AudioTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AudioTableModule { }
