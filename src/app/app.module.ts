import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryDataService } from '../core/services/InMemoryDataService';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AudioTableModule } from '../features/audio-table/audio-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 }),
    AudioTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
