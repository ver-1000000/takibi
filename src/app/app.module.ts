import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlameComponent } from './flame/flame.component';
import { SafePipe } from './safe.pipe';
import { KeyTrackByPipe } from './key-track-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlameComponent,
    SafePipe,
    KeyTrackByPipe
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
