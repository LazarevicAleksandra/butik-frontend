import { LoginComponent } from './components/login/login.component';
import { VelicinaComponent } from './components/velicina/velicina.component';
import { RacunComponent } from './components/racun/racun.component';
import { PorudzbinaartiklComponent } from './components/porudzbinaartikl/porudzbinaartikl.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { ModelComponent } from './components/model/model.component';
import { MarkaComponent } from './components/marka/marka.component';
import { BarkodComponent } from './components/barkod/barkod.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { RadnikComponent } from './components/radnik/radnik.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},

  {path: 'artikl', component: ArtiklComponent},
  {path: 'barkod', component: BarkodComponent},
  {path: 'marka', component: MarkaComponent},
  {path: 'model', component: ModelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'porudzbina', component: PorudzbinaComponent},
  {path: 'porudzbinaartikl', component: PorudzbinaartiklComponent},
  {path: 'racun', component: RacunComponent},
  {path: 'velicina', component: VelicinaComponent},
  {path: 'kupac', component: KupacComponent},
  {path: 'radnik', component: RadnikComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
