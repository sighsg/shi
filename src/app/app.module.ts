import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DepartamentosComponent } from './components/listado/departamentos/departamentos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginatorModule} from 'primeng/paginator';

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
    FormsModule,
    PaginatorModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
