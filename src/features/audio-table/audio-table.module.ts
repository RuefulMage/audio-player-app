import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioTableComponent } from './audio-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AudioPlayerModule } from '../../core/components/audio-player/audio-player.module';
import { ResponsiveColumnsDirective } from './directives/responsive-columns.directive';

@NgModule({
  declarations: [AudioTableComponent, ResponsiveColumnsDirective],
  exports: [AudioTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    AudioPlayerModule,
  ],
})
export class AudioTableModule {}
