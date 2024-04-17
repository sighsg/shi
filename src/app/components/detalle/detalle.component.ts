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
  indexAsociado: any;
  asociadoSiguiente: any;
  asociadoAnterior: any;
  segundoAsociado: any;
  ultimoAsociadoIndex: any;
  ultimoAsociado: any;
  primerAsociado: any;

  constructor(private route: ActivatedRoute, private excelService: ExcelService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const codigoAsociado = String(params['codigoAsociado']);
      this.excelService.readExcel().then(
        data => {
          this.asociados = this.excelService.getAsociadoByID(codigoAsociado, data);
          /* console.log("asociados: ", this.asociados) */
          this.indexAsociado = data.indexOf(this.asociados)
          this.primerAsociado = data[0].codigoAsociado
          this.ultimoAsociadoIndex = data.length - 1
          this.ultimoAsociado = data[this.ultimoAsociadoIndex].codigoAsociado
          this.segundoAsociado = data[1].codigoAsociado
          this.asociadoAnterior = data[this.indexAsociado - 1].codigoAsociado
          this.asociadoSiguiente = data[this.indexAsociado + 1].codigoAsociado
        },
        error => {
          console.log('Error al leer el archivo Excel:', error);
        }
      );
    });
  }
/* 
  Esta función es nativa de javascript y lo que hará es compartir el link por la vía que
  el usuario prefiera(mail, redes sociales, etc).

  El title es lo que se pondrá junto al link(puede verse cuando se envía por una vía que
  sea de mensajería, tal como lo es whatsapp o el email).
 */
  socialShare() {
    navigator.share({
      title: "Esta es mi tarjeta personal de Criador registrado en Asocebú. Para visualizarla ingrese al siguiente enlace: ",
      url: window.document.location.href
    })
  }

  /* 
  prev() y next() simplemente restan una posición al index, por alguna razón no funcionan
  bien con la posición 0 ni con la final, por ello se parametrizan los casos concretos.
  home() solo realiza una redirección al componenente principal.
  */
  prev() {
    if (this.indexAsociado == 0) {
      this.router.navigate(['/listado', this.asociados.departamento1, this.ultimoAsociado])
    } else {
      this.router.navigate(['/listado', this.asociados.departamento1, this.asociadoAnterior])
    }
  }

  home() {
    this.router.navigate(['/listado'])
  }

  next() {
    if (this.indexAsociado == 0) {
      this.router.navigate(['/listado', this.asociados.departamento1, this.segundoAsociado])
    } else if (this.indexAsociado == this.ultimoAsociadoIndex) {
      this.router.navigate(['/listado', this.asociados.departamento1, this.primerAsociado])
    } else {
      this.router.navigate(['/listado', this.asociados.departamento1, this.asociadoSiguiente])
    }
  }
}

