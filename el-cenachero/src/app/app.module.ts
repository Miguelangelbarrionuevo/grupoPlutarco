import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/footer/footer.component';
import { CateringComponent } from './components/catering/catering.component';
import { RestauranteTeatinosComponent } from './pages/restaurante-teatinos/restaurante-teatinos.component';
import { RestauranteCentroComponent } from './pages/restaurante-centro/restaurante-centro.component';
import { RestauranteManeraComponent } from './pages/restaurante-manera/restaurante-manera.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    QuienesSomosComponent,
    FooterComponent,
    CateringComponent,
    RestauranteTeatinosComponent,
    RestauranteCentroComponent,
    RestauranteManeraComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
