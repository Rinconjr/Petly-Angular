import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

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
          this.router.navigate(['/cedula-not-found/' + this.cedulaCliente]);
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

}
