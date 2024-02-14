import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './pages/Initial/Initial.component';
import { HeaderComponent } from './pages/header/header.component';
import { CarrouselComponent } from './pages/Carrousel/Carrousel.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TotalGamesComponent } from './pages/TotalGames/TotalGames.component';
import { GamesDetailComponent } from './pages/GamesDetail/GamesDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HeaderComponent,
    CarrouselComponent,
    TotalGamesComponent,
    GamesDetailComponent
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
