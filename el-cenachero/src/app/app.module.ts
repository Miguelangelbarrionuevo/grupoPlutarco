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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminReservasComponent } from './pages/admin-reservas/admin-reservas.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    TrabajaConNosotrosComponent,
    AdminLoginComponent,
    AdminReservasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  TranslateModule.forRoot({
  defaultLanguage: 'es',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
