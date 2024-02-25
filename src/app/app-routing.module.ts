import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './pages/Initial/Initial.component';
import { StadisticsComponent } from './pages/TotalGames/Stadistics.component';
import { GamesDetailComponent } from './pages/GamesDetail/GamesDetail.component';
import { PlataformasComponent } from './pages/plataformas/plataformas.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: InitialComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games/:id', component: GamesDetailComponent },
  { path: 'stadistic-games', component: StadisticsComponent },
  { path: 'platforms', component: PlataformasComponent},
  { path: 'contacts', component: ContactsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

