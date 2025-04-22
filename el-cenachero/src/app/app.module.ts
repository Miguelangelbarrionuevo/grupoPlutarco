import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/footer/footer.component';
import { CateringComponent } from './components/catering/catering.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    QuienesSomosComponent,
    FooterComponent,
    CateringComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
