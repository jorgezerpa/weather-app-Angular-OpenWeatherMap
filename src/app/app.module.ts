import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { InfoComponent } from './components/info/info.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ControlbarComponent } from './components/controlbar/controlbar.component';
import { DetailinfoComponent } from './components/detailinfo/detailinfo.component';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
