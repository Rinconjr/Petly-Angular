import { Component, OnInit } from '@angular/core';

import { Tratamiento } from 'src/app/models/tratamiento';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-admin-bar-chart',
  templateUrl: './admin-bar-chart.component.html',
  styleUrls: ['./admin-bar-chart.component.css']
})
export class AdminBarChartComponent implements OnInit {

  cantTratXTipo: any;
  listaElement0: string[] = [];
  listaElement1: number[] = [];

  constructor(
    private tratamientoService: TratamientoServiceService) { }
  
  public chart: Chart | undefined;
  
  ngOnInit(): void {

    this.tratamientoService.numTratXTipo().subscribe(
      data => {
        this.cantTratXTipo = data;
        // console.log( this.cantTratXTipo);

        this.cantTratXTipo.forEach((element: any) => {
          // console.log(element.tipo);
        })
      }
      
    )

    this.tratamientoService.numTratXTipo().subscribe(
      data => {
        this.cantTratXTipo = data;
  
        // Lista para almacenar element[0]
        this.listaElement0 = this.cantTratXTipo.map((element: any) => element[0]);
  
        // Lista para almacenar element[1]
        this.listaElement1 = this.cantTratXTipo.map((element: any) => element[1]);
  
        // console.log("Lista de element[0]:", this.listaElement0);
        // console.log("Lista de element[1]:", this.listaElement1);
  
        const chartData = {
          labels: this.listaElement0,
          datasets: [{
            label: 'Medicamento - Cantidad',
            data: this.listaElement1,
            backgroundColor: [
              '#3468c0'
              // 'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              '#3468c0'
              // 'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 2
          }
        ],
          hoverOffset: 4
        };
  
        this.chart = new Chart("chart", {
          type: 'bar' as ChartType,
          data: chartData
        });
      }
    );
  }
}
