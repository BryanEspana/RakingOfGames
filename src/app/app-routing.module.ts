import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './pages/Initial/Initial.component';

const routes: Routes = [
  { path: 'home', component: InitialComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

