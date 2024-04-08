import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent implements OnInit {

  filtroBusqueda: string = "" //Para la barra de busqueda
  asociadosFiltrados: any
  asociados: any

  constructor(private excelService: ExcelService) { }

  ngOnInit(): void {
    /* Llamamos al servicio para leer el archivo Excel y obtener los departamentos,
    con el mapeo se obtendrá solo uno, es decir, no se deben traer datos repetidos
    independiente del número de veces que se repitan en db.*/

    this.excelService.readExcel().then(
      data => {
        this.asociados = data;
      },
      error => {
        console.error('Error al leer el archivo Excel:', error);
      }
    );
  }

  buscar(): void {
    /* Filtra por:
    *Nombre, Haciendas, Departamento1 y Tipo de Ganado
    No filtra por:
    *Departamento2/3, Redes Sociales, Números de telefono, representanteLegal ni CampoAdicional 
   */ 

    if(this.filtroBusqueda.length == 0){
      document.getElementById("busquedaCero")?.classList.add("noMatches");
      document.getElementById("busquedaCaja")?.classList.add("hideComponent")
    }else{
      this.asociadosFiltrados = this.asociados.filter((asociado: any) =>
        (asociado.nombre && asociado.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
        (asociado.codigoAsociado && asociado.codigoAsociado.toString().includes(this.filtroBusqueda)) ||
        (asociado.hacienda1 && asociado.hacienda1.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
        (asociado.hacienda2 && asociado.hacienda2.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
        (asociado.hacienda3 && asociado.hacienda3.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
        (asociado.departamento1 && asociado.departamento1.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
        (asociado.tipoGanado && asociado.tipoGanado.toLowerCase().includes(this.filtroBusqueda.toLowerCase()))
      )
    }
    //Para ocultar el listado de departamentos, añadir el estilo directamente aquí generaba error. 
    document.getElementById("app-departamentos")?.classList.add("hideComponent")
  }

  clearSearch() {
    document.location.reload()
  }

}