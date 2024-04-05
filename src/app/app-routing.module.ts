import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent }, // Ruta por defecto
/*   { path: 'listado', component: ListadoComponent }, */
  { path: 'listado/:departamento', component: CardsComponent }, // Ruta con parámetro de departamento
  
  // Ruta para el componente DetalleComponent
  { path: 'detalle/:codigoAsociado', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
