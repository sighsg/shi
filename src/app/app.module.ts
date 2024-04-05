import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CardsComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
