import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

   // Método para leer el archivo Excel
   public readExcel(): Promise<any[]> {
    const filePath = '/assets/directorioCriadores.xlsx'; // Ruta del archivo Excel

    return new Promise((resolve, reject) => {
      fetch(filePath)
        .then(response => response.arrayBuffer())
        .then(data => {
          const workbook: XLSX.WorkBook = XLSX.read(new Uint8Array(data), { type: 'array' });
          const sheetName: string = workbook.SheetNames[0]; //Se obtiene el nombre de la hoja
          const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName]; //Se obtiene la hoja
          const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: false }); 

          /* El raw false se asegura que los datos se interpreten como texto, si esta en
          true puede dedicir interpretar número como type-number y no type-text, por ejemplo. */              
          resolve(jsonData);
        })
        .catch(error => {
          console.error('Error al leer el archivo Excel Service:', error); //Error
          reject(error); //Rechazo de la promesa
        });
    });
  }

  /* Método para obtener el id del asociado,
  esto es para la vista de la carta detallada */

  getAsociadoByID(codigoAsociado: any, excelData:any[]):any{
    console.log(codigoAsociado)
    return excelData.find(asociado => asociado.codigoAsociado === codigoAsociado)
  }

  anterior(){
    
  }
}
