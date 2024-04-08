import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})

export class DetalleComponent implements OnInit {

  asociados: any;
  idActual: any;

  constructor(private route: ActivatedRoute, private excelService: ExcelService) { }

  ngOnInit(): void {

    this.asociadoProximo()

    this.route.params.subscribe(params => {
      const codigoAsociado = String(params['codigoAsociado']);
      this.excelService.readExcel().then(
        data => {
          this.asociados = this.excelService.getAsociadoByID(codigoAsociado, data);
          
          /* console.log('Asociado encontrado:', this.asociados);  */
        },
        error => {
          console.log('Error al leer el archivo Excel:', error);
        }
      );
    });
  }

  socialShare() {
    navigator.share({
      title: "Esta es mi tarjeta personal de Criador registrado en Asocebú. Para visualizarla ingrese al siguiente link: ",
      url: window.document.location.href
    })
  }  

  asociadoProximo(){
    console.log("proximo")
    console.log("Id Actual: ", this.idActual)
  }

  asociadoAnterior(){
    
  }
}

