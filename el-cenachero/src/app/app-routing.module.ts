import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteTeatinosComponent } from './pages/restaurante-teatinos/restaurante-teatinos.component';
import { HomeComponent } from './pages/home/home.component'; // si tienes una home
import { RestauranteCentroComponent } from './pages/restaurante-centro/restaurante-centro.component';
import { RestauranteManeraComponent } from './pages/restaurante-manera/restaurante-manera.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurante-teatinos', component: RestauranteTeatinosComponent },
  { path: 'restaurante-centro', component: RestauranteCentroComponent },
  { path: 'restaurante-manera', component: RestauranteManeraComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
