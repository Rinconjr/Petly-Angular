import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vet-login',
  templateUrl: './vet-login.component.html',
  styleUrls: ['./vet-login.component.css']
})
export class VetLoginComponent {

  cedulaVeterinario: string = "";
  passwordVeterinario: string = "";

  constructor(
    private veterinarioService: VeterinarioServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginVeterinario() {
    this.veterinarioService.loginVeterinario(this.cedulaVeterinario, this.passwordVeterinario).pipe(
      catchError((error) => {
        if (error.status === 400) {
          this.mostrarAlerta(error.error);
        }
        return throwError(error);
      })
    ).subscribe(
      (veterinario) => {
        if(veterinario != null) {
          if(veterinario == 1)
            this.router.navigate(['/admin/dashboard']);
          else
            this.router.navigate(['/veterinario/' + veterinario + '/mascotas/all']);
        }
      }
    );
  }

  mostrarAlerta(errorMessage: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;"> Error </span>',
      html: errorMessage + '<br>Por favor inténtelo de nuevo',
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Volver',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.router.navigate(['/login/veterinario']);
      }
    });
  }

}
