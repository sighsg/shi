import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetalleComponent } from './components/detalle/detalle.component';


import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartamentosComponent } from './components/listado/departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CardsComponent,
    DetalleComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    ButtonModule,
    PaginatorModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
