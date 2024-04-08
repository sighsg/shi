import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' }, //Para que se redirija a listado y quede por defecto
  { path: 'listado', component: ListadoComponent }, //Componente principal
/*   { path: 'listado', component: ListadoComponent }, */
  { path: 'listado/:departamento', component: CardsComponent }, // Ruta con parámetro de departamento
  
  // Ruta para el componente DetalleComponent
  { path: 'listado/:departamento/:codigoAsociado', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
