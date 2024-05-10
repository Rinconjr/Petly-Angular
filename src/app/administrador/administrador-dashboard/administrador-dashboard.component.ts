import { Component, OnInit } from '@angular/core';
import { each } from 'chart.js/dist/helpers/helpers.core';
import { Tratamiento } from 'src/app/models/tratamiento';
import { Veterinario } from 'src/app/models/veterinario';
import { DrogaServiceService } from 'src/app/service/droga-service.service';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador-dashboard',
  templateUrl: './administrador-dashboard.component.html',
  styleUrls: ['./administrador-dashboard.component.css'],
})
export class AdministradorDashboardComponent implements OnInit {
  totalTratUM: any;
  cantTratXTipo: any;
  cantVetAct: any;
  cantVetInact: any;
  totalPets: any;
  cantPetsAct: any;
  ventasTotales: any;
  ventasTotalesDash!: string;
  gananciasTotales: any;
  top3trats: any;

  constructor(
    private tratamientoService: TratamientoServiceService,
    private veterinarioService: VeterinarioServiceService,
    private mascotaService: MascotaServiceService,
    private drogasService: DrogaServiceService
  ) {}

  ngOnInit(): void {
    this.tratamientoService.lastMonthTreatment().subscribe((data) => {
      this.totalTratUM = data;
    });

    this.tratamientoService.numTratXTipo().subscribe((data) => {
      this.cantTratXTipo = data;

      this.cantTratXTipo.forEach((element: any) => {});
    });

    this.tratamientoService.numTratXTipo().subscribe((data) => {
      this.cantTratXTipo = data;

      // Lista para almacenar element[0]
      const listaElement0: any[] = this.cantTratXTipo.map(
        (element: any) => element[0]
      );

      // Lista para almacenar element[1]
      const listaElement1: any[] = this.cantTratXTipo.map(
        (element: any) => element[1]
      );
      
    });

    this.veterinarioService.totalVets().subscribe((data) => {
      this.cantVetAct = data;
    });

    this.veterinarioService.inactiveVets().subscribe((data) => {
      this.cantVetInact = data;
    });

    this.mascotaService.totalPets().subscribe((data) => {
      this.totalPets = data;
    });

    this.mascotaService.activePets().subscribe((data) => {
      this.cantPetsAct = data;
    });

    this.drogasService.totalVendDrogas().subscribe((data) => {
      this.ventasTotales = data.toLocaleString();;
    });

    this.drogasService.totalGanDrogas().subscribe((data) => {
      this.gananciasTotales = data.toLocaleString();;
    });

    this.drogasService.top3Drogas().subscribe((data) => {
      this.top3trats = data;
      console.log(this.top3trats);
    });

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add('active');
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('active');
    });
  }


  mostrarAlerta(csv: string, nombre: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Descargar reporte especializado</span>',
      html: '¿Quieres descargar un reporte especializado de estas metricas?',
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      showCancelButton: true,
      cancelButtonColor: '#898989',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Descargar',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.descargarArchivoCSV(csv, nombre); // Descargar archivo CSV
        Swal.fire({
          title: "Descarga finalizada!",
          text: "El archivo \"" + nombre + "\" ha sido descargado exitosamente!",
          icon: "success",
          confirmButtonColor: '#3468c0',
        });
      }
      });
  }

  //Veterinarios activos

  //Veterinarios inactivos

  //Mascotas totales

  //Mascotas activas

  //Ventas totales por mes
  generarVentasMensuales() {
    let csvData = 'Mes,Ventas\n'; // Encabezado CSV

    this.drogasService.ventasMensuales().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        const mesNombre = this.getMonthName(element[0]); // Obtener nombre del mes
        const filaCSV = `${mesNombre},${element[1]}\n`; // Construir fila CSV
        csvData += filaCSV; // Agregar fila al CSV
      });

      this.mostrarAlerta(csvData, 'reporte_Ventas_Mensuales.csv'); // Descargar archivo CSV después de procesar los datos
    });
  }

  //Gananacias (gastos vs ingresos)
  reporteGastosIngresos() {
    let csvData = 'Tipo,Dinero\n'; // Encabezado CSV
    let i=0;
  
    this.drogasService.gastosIngresos().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        const filaCSV = `Gastos,${element[0]}\nIngresos,${element[1]}\n`; // Construir fila CSV
        
        csvData += filaCSV; // Agregar fila al CSV
      });

      this.mostrarAlerta(csvData, 'reporte_Gastos_Ingresos.csv'); // Descargar archivo CSV después de procesar los datos
    });

  }

  //Drogas vendidas en el mes
  generarReporteMensual() {
    let csvData = 'Droga,CantidadVendida\n'; // Encabezado CSV
  
    this.tratamientoService.numTratXTipo().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        const filaCSV = `${element[0]},${element[1]}\n`; // Construir fila CSV
        csvData += filaCSV; // Agregar fila al CSV
      });

      this.mostrarAlerta(csvData, 'reporte_Mensual_Drogas.csv'); // Descargar archivo CSV después de procesar los datos
    });
  }

  //Drogas vendidas en el año
  generarReporteAnual() {
    let csvData = 'Mes,Droga,CantidadVendida\n'; // Encabezado CSV
  
    this.drogasService.reporteAnual().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        const mesNombre = this.getMonthName(element[0]); // Obtener nombre del mes
        const filaCSV = `${mesNombre},${element[1]},${element[2]}\n`; // Construir fila CSV
        csvData += filaCSV; // Agregar fila al CSV
      });
  
      this.mostrarAlerta(csvData, 'reporte_Anual_Drogas.csv'); // Descargar archivo CSV después de procesar los datos
    });
  }

  // Función para obtener el nombre del mes a partir de su número
  getMonthName(monthNumber: number): string {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[monthNumber - 1]; // Restamos 1 porque los meses en JavaScript van de 0 a 11
  }

  //Funcion para descargar archivo CSV
  descargarArchivoCSV(data: string, nombre: string) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  
}
