import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent {
  
  cedulaCliente: string = "";

  constructor(
    private clienteService: ClienteServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginCliente() {
    this.clienteService.loginClient(this.cedulaCliente).pipe(
      catchError((error) => {
        if (error.status === 400) {
          // console.log(error.error)
          this.mostrarAlerta(error.error);
        }
        return throwError(error);
      })
    ).subscribe(
      (cliente) => {
        if(cliente != null) {
          this.router.navigate(['/usuario/' + cliente]);
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
        this.router.navigate(['/login/cliente']);
      }
    });
  }

}
