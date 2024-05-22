import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/models/droga';
import { Tratamiento } from 'src/app/models/tratamiento';
import { Veterinario } from 'src/app/models/veterinario';
import { DrogaServiceService } from 'src/app/service/droga-service.service';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vet-mostrar-mascota',
  templateUrl: './vet-mostrar-mascota.component.html',
  styleUrls: ['./vet-mostrar-mascota.component.css']
})
export class VetMostrarMascotaComponent implements OnInit {

  cliente!: any;
  listaTratamientos!: Tratamiento[];

  droga!: string;
  idMascota!: number;
  listaDrogas!: Droga[];
  vet_id!: number;
  vet!: Veterinario;

  constructor(
    private mascotaService: MascotaServiceService,
    private tratamientoService: TratamientoServiceService,
    private drogaService: DrogaServiceService,
    private veterinarioService: VeterinarioServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit(): void {

    this.veterinarioService.vetHome().subscribe(
      (llegaVet) => {
        this.vet = llegaVet,
        this.vet_id = this.vet.id
      }
    );

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.idMascota = id;
      
      this.mascotaService.findById(id).subscribe(
        (cliente) => {
          if(cliente != null ) 
            this.cliente = cliente
          else 
            this.router.navigate(['/id-not-found/mascota/' + id]);
        }
      );

      this.tratamientoService.findByIdPet(id).subscribe(
        (llegaLista) => {
          this.listaTratamientos = llegaLista;
        }
      );
    });

    this.drogaService.findDisponibles().subscribe(
      (llegaLista) => {
        this.listaDrogas = llegaLista;
      }
    );

    
    let sidebar = document.querySelector('.sidebar') as HTMLElement;
    
    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });
    
    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }
  
  sendDroga!: string;

  crearTratamiento() {
    this.sendDroga = this.droga;

    if (this.listaDrogas.find(droga => droga.nombre === this.droga)) {
      this.mostrarAlerta(this.sendDroga);
      this.tratamientoService.addTreatment(this.sendDroga, this.vet_id, this.idMascota);
      this.mandarCorreo();
    } else {
      this.mostrarAlertaError(this.sendDroga);
    }
  }

  mostrarAlerta(nombreDroga: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Se ha creado un nuevo tratamiento</span>',
      html: 'Se le ha recetado ' + nombreDroga + ' a la mascota ' + this.cliente.mascotas[0].nombre,
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Siguiente',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      }
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.router.navigate(['/veterinario/mascotas/all']);
      }
    });
  }

  mostrarAlertaError(nombre: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">No se ha encontrado el medicamento</span>',
      html: 'No hemos podido encontrar la droga \"' + nombre + '\" en nuestra base de datos',
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Regresar',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      }
    })
  }

  mandarCorreo() {
    emailjs.init('bjXQ5wYpcg9WDZV3V');

    const serviceID = 'default_service';
    const templateID = 'template_94flrq3';

    const variables = {
      nombreMascotaCorreo: this.cliente.mascotas[0].nombre,
      nombreClienteCorreo: this.cliente.nombre,
      nombreDoctorCorreo: this.vet.nombre,
      nombreDrogaCorreo: this.sendDroga,
      mailCliente: this.cliente.correo
    };

    emailjs.send(serviceID, templateID, variables);
  }
}
