import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  chatBot: boolean = false;
  
  constructor(
    private router: Router, 
    private elementRef: ElementRef,
    private userService: UserServiceService
  ) {}

  
    ngAfterViewInit() {
    // Función para mostrar el popup de contacto
    function mostrarContacto() {
      // Popup de alerta
      Swal.fire({
        title: '<span style="color: #000000;">Contáctanos</span>',
        html: "Whatsapp +57 111 111 1111",
        imageUrl: "../../../assets/images/popup.png",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image",
        confirmButtonColor: "#3468c0",
        confirmButtonText: "Regresar",
      });
    }

    // Seleccionar el botón de contacto y agregar un evento de clic
    const btnContacto = document.querySelector('.btnUbi');
    btnContacto?.addEventListener('click', mostrarContacto);

    document.addEventListener('DOMContentLoaded', () => {
      const carrusel = document.querySelector('.carruselServ') as HTMLElement;
      let carruselItems = document.querySelectorAll('.card');
      let carruselItemLast = carruselItems[
        carruselItems.length - 1
      ] as HTMLElement;

      const btnLeft = document.querySelector('#btn-left-serv') as HTMLElement;
      const btnRight = document.querySelector('#btn-right-serv') as HTMLElement;

      carrusel.insertAdjacentElement('afterbegin', carruselItemLast);

      function Next() {
        let carruselItemFirst = document.querySelectorAll(
          '.card'
        )[0] as HTMLElement;
        carrusel.style.marginLeft = '-864px';
        carrusel.style.transition = 'all 0.5s';
        setTimeout(function () {
          carrusel.style.transition = 'none';
          carrusel.insertAdjacentElement('beforeend', carruselItemFirst);
          carrusel.style.marginLeft = '-432px';
        }, 500);
      }

      function Prev() {
        let carruselItem = document.querySelectorAll('.card');
        let carruselItemLast = carruselItem[
          carruselItem.length - 1
        ] as HTMLElement;
        carrusel.style.marginLeft = '0px';
        carrusel.style.transition = 'all 0.5s';
        setTimeout(function () {
          carrusel.style.transition = 'none';
          carrusel.insertAdjacentElement('afterbegin', carruselItemLast);
          carrusel.style.marginLeft = '-432px';
        }, 500);
      }

      btnRight.addEventListener('click', function () {
        Next();
      });

      btnLeft.addEventListener('click', function () {
        Prev();
      });

      const carruselVet = document.querySelector('.carruselVet') as HTMLElement;
      let carruselItemsVet = document.querySelectorAll('.vetCard');
      let carruselItemLastVet = carruselItemsVet[
        carruselItemsVet.length - 1
      ] as HTMLElement;

      const btnLeftVet = document.querySelector('#btn-left-vet') as HTMLElement;
      const btnRightVet = document.querySelector(
        '#btn-right-vet'
      ) as HTMLElement;

      carruselVet.insertAdjacentElement('afterbegin', carruselItemLastVet);

      function NextVet() {
        let carruselItemFirstVet = document.querySelectorAll(
          '.vetCard'
        )[0] as HTMLElement;
        carruselVet.style.marginLeft = '-864px';
        carruselVet.style.transition = 'all 0.5s';
        setTimeout(function () {
          carruselVet.style.transition = 'none';
          carruselVet.insertAdjacentElement('beforeend', carruselItemFirstVet);
          carruselVet.style.marginLeft = '-432px';
        }, 500);
      }

      function PrevVet() {
        let carruselItemVet = document.querySelectorAll('.vetCard');
        let carruselItemLastVet = carruselItemVet[
          carruselItemVet.length - 1
        ] as HTMLElement;
        carruselVet.style.marginLeft = '0px';
        carruselVet.style.transition = 'all 0.5s';
        setTimeout(function () {
          carruselVet.style.transition = 'none';
          carruselVet.insertAdjacentElement('afterbegin', carruselItemLastVet);
          carruselVet.style.marginLeft = '-432px';
        }, 500);
      }

      btnRightVet.addEventListener('click', function () {
        NextVet();
      });

      btnLeftVet.addEventListener('click', function () {
        PrevVet();
      });
    });
  }

  scrollToSection(fragment: string): void {
    this.router.navigate([], { fragment }).then(() => {
      const element = this.elementRef.nativeElement.querySelector(`#${fragment}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  chatBotShow() {
    if(this.chatBot === false){
      this.chatBot = true;
    }
    else{
      this.chatBot = false;
    }
  }

  login() {
    const token = localStorage.getItem('token');

    if(token == null){
      this.router.navigate(['/login/cliente']);
    } else {
      this.userService.encontrarRolToken().subscribe(
        (rol) => {
          console.log(rol);

          if(rol == 1){
            this.router.navigate(['/admin/dashboard']);
          }
          else if(rol == 2){
            this.router.navigate(['/veterinario/mascotas/all']);
          }
          else if(rol == 3){
            this.router.navigate(['/usuario']);
          }
        }
      );
    }
  }
  
}
