import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SedesService } from './core/services/sedes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { TempPipe } from './core/pipes/temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    TempPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    SedesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
