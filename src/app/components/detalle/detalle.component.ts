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
  indexAsociado: any;
  asociadoSiguiente: any;
  asociadoAnterior: any;
  asociadoUltimo: any;
  asociadoUltimoRed:any;

  constructor(private route: ActivatedRoute, private excelService: ExcelService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const codigoAsociado = String(params['codigoAsociado']);
      this.excelService.readExcel().then(
        data => {
          this.asociados = this.excelService.getAsociadoByID(codigoAsociado, data);
          /* console.log("asociados: ", this.asociados) */
          this.indexAsociado = data.indexOf(this.asociados)
          this.asociadoAnterior = data[this.indexAsociado - 1].codigoAsociado
          this.asociadoSiguiente = data[this.indexAsociado + 1].codigoAsociado
        },
        error => {
          console.log('Error al leer el archivo Excel:', error);
        }
      );
    });
  }

  socialShare() {
    navigator.share({
      title: "Esta es mi tarjeta personal de Criador registrado en Asocebú. Para visualizarla ingrese al siguiente enlace: ",
      url: window.document.location.href
    })
  } 

  prev(){
    this.router.navigate(['/listado', this.asociados.departamento1, this.asociadoAnterior])    
  }

  next(){
    this.router.navigate(['/listado', this.asociados.departamento1, this.asociadoSiguiente])   
  }
}

