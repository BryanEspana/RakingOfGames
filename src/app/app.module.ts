import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './pages/Initial/Initial.component';
import { HeaderComponent } from './pages/header/header.component';
import { CarrouselComponent } from './pages/Carrousel/Carrousel.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StadisticsComponent } from './pages/TotalGames/Stadistics.component';
import { GamesDetailComponent } from './pages/GamesDetail/GamesDetail.component';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { PlataformasComponent } from './pages/plataformas/plataformas.component';
import { NgxLoadingModule } from "ngx-loading";
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HeaderComponent,
    CarrouselComponent,
    StadisticsComponent,
    GamesDetailComponent,
    PlataformasComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    GalleriaModule,
    RatingModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
