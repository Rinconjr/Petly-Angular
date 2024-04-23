import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

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
    console.log(this.cedulaVeterinario, this.passwordVeterinario)

    this.veterinarioService.loginVeterinario(this.cedulaVeterinario, this.passwordVeterinario).subscribe(
      (veterinario) => {
        if(veterinario != null) {
          this.router.navigate(['/veterinario/' + veterinario]);
        } 
      }
    );
  }

}
