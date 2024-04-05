import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: 'listado', redirectTo: '/listado', pathMatch: 'full' }, // Ruta por defecto
/*   { path: 'listado', component: ListadoComponent }, */
  { path: 'listado/:departamento', component: CardsComponent }, // Ruta con parámetro de departamento
  // Rutas para cada departamento de Colombia
  { path: 'listado/Amazonas', component: CardsComponent },
  { path: 'listado/Amazonas', component: CardsComponent },
  { path: 'listado/Antioquia', component: CardsComponent },
  { path: 'listado/Arauca', component: CardsComponent },
  { path: 'listado/Atlantico', component: CardsComponent },
  { path: 'listado/Bolivar', component: CardsComponent },
  { path: 'listado/Boyaca', component: CardsComponent },
  { path: 'listado/Caldas', component: CardsComponent },
  { path: 'listado/Caqueta', component: CardsComponent },
  { path: 'listado/Casanare', component: CardsComponent },
  { path: 'listado/Cauca', component: CardsComponent },
  { path: 'listado/Cesar', component: CardsComponent },
  { path: 'listado/Choco', component: CardsComponent },
  { path: 'listado/Cordoba', component: CardsComponent },
  { path: 'listado/Cundinamarca', component: CardsComponent },
  { path: 'listado/Guainia', component: CardsComponent },
  { path: 'listado/Guaviare', component: CardsComponent },
  { path: 'listado/Huila', component: CardsComponent },
  { path: 'listado/LaGuajira', component: CardsComponent },
  { path: 'listado/Magdalena', component: CardsComponent },
  { path: 'listado/Meta', component: CardsComponent },
  { path: 'listado/Narino', component: CardsComponent },
  { path: 'listado/NorteDeSantander', component: CardsComponent },
  { path: 'listado/Putumayo', component: CardsComponent },
  { path: 'listado/Quindio', component: CardsComponent },
  { path: 'listado/Risaralda', component: CardsComponent },
  { path: 'listado/SanAndresYProvidencia', component: CardsComponent },
  { path: 'listado/Santander', component: CardsComponent },
  { path: 'listado/Sucre', component: CardsComponent },
  { path: 'listado/Tolima', component: CardsComponent },
  { path: 'listado/ValleDelCauca', component: CardsComponent },
  { path: 'listado/Vaupes', component: CardsComponent },
  { path: 'listado/Vichada', component: CardsComponent },
  // Ruta para Venezuela
  { path: 'listado/Venezuela', component: CardsComponent },
  // Ruta para el componente DetalleComponent
  { path: 'detalle/:codigoAsociado', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
