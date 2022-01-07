import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { InfoComponent } from './info/info.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ControlbarComponent } from './controlbar/controlbar.component';
import { DetailinfoComponent } from './detailinfo/detailinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InfoComponent,
    TimelineComponent,
    ControlbarComponent,
    DetailinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
