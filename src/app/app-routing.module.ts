import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './pages/Initial/Initial.component';
import { TotalGamesComponent } from './pages/TotalGames/TotalGames.component';
import { GamesDetailComponent } from './pages/GamesDetail/GamesDetail.component';
import { PlataformasComponent } from './pages/plataformas/plataformas.component';

const routes: Routes = [
  { path: 'home', component: InitialComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games/:id', component: GamesDetailComponent },
  { path: 'total-games', component: TotalGamesComponent },
  { path: 'platforms', component: PlataformasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

