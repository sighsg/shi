import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../../services/excel.service';
@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.scss'
})
export class DepartamentosComponent implements OnInit{

  asociados: any
  departamentos: string[] = []; // Array para almacenar los departamentos únicos

  constructor(private route: ActivatedRoute,
    private router: Router,
    private excelService: ExcelService) { }

  ngOnInit(): void {
    /* Llamamos al servicio para leer el archivo Excel y obtener los departamentos,
    con el mapeo se obtendrá solo uno, es decir, no se deben traer datos repetidos
    independiente del número de veces que se repitan en db.*/

    this.excelService.readExcel().then(
      data => {
        this.asociados = data;
        /* Esto hace cuatro cosas: 
        1. map: Mapea los datos para solo obtener, en este caso, el tepartamento1
        2. filter: filtra los calores malos com onull, undefined,false, 0 o nan
        3. set: elimina cualquier valor duplicado
        4. sort: los ordena de manera descendente
        */ 
        this.departamentos = [...new Set(data.map(asociado => asociado.departamento1).filter(departamento => departamento))].sort();
        /* console.log(this.departamentos) */      
      },
      error => {
        console.error('Error al leer el archivo Excel:', error);
      }
    );
  }

  navigateToDepartamento(departamento: string): void {
    this.router.navigate(['/listado', departamento]);
  }
}
