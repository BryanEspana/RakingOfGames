import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './pages/Initial/Initial.component';
import { TotalGamesComponent } from './pages/TotalGames/TotalGames.component';

const routes: Routes = [
  { path: 'home', component: InitialComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'total-games', component: TotalGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

