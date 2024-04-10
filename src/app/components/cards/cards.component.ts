import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent implements OnInit {

  departamento!: string;
  codigo!: string;
  asociados: any[] = [];
  asociadosCodigo: any;

  //Paginador
  paginatedDataList: any[] = []; // Datos que se muestran en la página actual
  totalRecords!: number;
  rows: number = 16; // Número de registros por página
  first: number = 0; // Índice del primer registro en la página actual

  constructor(private route: ActivatedRoute, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.departamento = this.route.snapshot.params['departamento'];
    /* console.log(this.departamento) */
    
    this.excelService.readExcel().then(
      data => {
        this.asociados = data.filter(asociados => asociados.departamento1 === this.departamento);
        this.totalRecords = this.asociados.length; 
        //Se llama aquí, después de la llamada de los datos, si no, saldrá en blanco
        this.paginate();
        /* console.log("largo: ", this.asociados.length)
        console.log("Cards", this.asociados) */
        this.asociadosCodigo = data.filter(asociados => asociados.codigoAsociado === this.codigo)
        /* console.log("Codigo", this.codigo) */
      },
      error => {
        console.error('Error al leer el archivo Excel:', error);
      }
    );
  }

  //Método para redirigir a la particular-card
  verMas(codigoAsociado: any): void {
    // Comprobar si los parámetros son undefined antes de navegar
    if (codigoAsociado.codigoAsociado) {
      // Navegar a la página de detalles con los parámetros proporcionados
      this.router.navigate(['/listado', this.departamento, codigoAsociado.codigoAsociado]);
    } else {
      console.error('Alguno de los parámetros es undefined.');
    }
  }

  onPageChange(event:any) {
    // Evento contiene la información de la paginación
    this.first = event.first;
    this.rows = event.rows;
    this.paginate();
  }

  paginate() {
    // Calcula el índice del último registro en la página actual
    let lastIndex = this.first + this.rows;
    // Actualiza paginatedDataList con los datos de la página actual
    this.paginatedDataList = this.asociados.slice(this.first, lastIndex);
  }
}
