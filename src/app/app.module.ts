import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '@core/services/InMemoryDataService';
import { AudioTableModule } from '@features/audio-table/audio-table.module';

import { AppComponent } from './app.component';

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
