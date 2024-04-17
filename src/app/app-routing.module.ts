import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  //Ruta al componente principal (se redirrecionará por defecto)
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  //Componente principal (Descripción del directorio y barra de búsqueda. El listado se muestra con la etiqueta)
  { path: 'listado', component: ListadoComponent },
  //Ruta para cada departamento (Todas las cartas de cada uno de los departamentos)
  { path: 'listado/:departamento', component: CardsComponent }, 
  // Ruta para el componente DetalleComponent (La carta individual de cada criador)
  { path: 'listado/:departamento/:codigoAsociado', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
