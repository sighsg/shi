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
  asociados: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.departamento = this.route.snapshot.params['departamento'];

    this.excelService.readExcel().then(
      data => {
        this.asociados = data.filter(asociados => asociados.departamento1 === this.departamento);
        /* console.log("Cards", this.asociados) */
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
      this.router.navigate(['/detalle', codigoAsociado.codigoAsociado]);
    } else {
      console.error('Alguno de los parámetros es undefined.');
    }
  }
}
