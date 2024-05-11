import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {

  realizada: boolean = false;
  respondida: boolean = false;
  anterior: number = 3;

  preguntas: string[] = [
    "¿Qué es Petly?",
    "¿Quiénes desarrollaron Petly?",
    "¿Dónde está ubicada la veterinaria?",
    "¿Cuál es el horario de atención?",
    "¿Atienden otro tipo de mascotas?",
    "¿Qué servicios prestan?"
  ];

  respuestas: string[][] = [
    [
      "Petly es una veterinaria ubicada en la Universidad Javeriana en Bogotá, Colombia. Es un lugar donde el amor y la salud se encuentran en cada ladrido, ofreciendo una gama de servicios para cuidar de la salud y el bienestar de los perros.", 
      "Petly es un centro veterinario especializado en atender exclusivamente a perros. Ofrece una variedad de servicios que van desde vacunación y cirugía veterinaria hasta spa y cuidado dental, todo con el objetivo de garantizar la salud y felicidad de las mascotas caninas.", 
      "Petly es una clínica veterinaria con un enfoque único en el cuidado de los perros. Fundada por Nicolás Rincón, Alejandro Suárez y Hermann Hernández, se ha convertido en un referente en la Universidad Javeriana en Bogotá, Colombia, donde el amor y la salud se fusionan para brindar una atención de calidad a los amigos de cuatro patas."
    ],
    [
      "Petly fue desarrollado por Nicolás Rincón, Alejandro Suárez y Hermann Hernández. Estos visionarios combinaron su pasión por los animales con su experiencia en el campo de la veterinaria para crear un espacio donde el amor y la salud de los perros se priorizan en cada aspecto del servicio.",
      "Nicolás Rincón, Alejandro Suárez y Hermann Hernández son los mentes detrás de Petly, una veterinaria que se destaca por su compromiso con el bienestar de los perros. Su dedicación y experiencia en el campo de la medicina veterinaria han llevado a la creación de un lugar donde la calidad y el amor se encuentran en cada ladrido.",
      "Petly fue concebido por Nicolás Rincón, Alejandro Suárez y Hermann Hernández, tres profesionales apasionados por los animales y comprometidos con su salud y bienestar. Su visión dio origen a una veterinaria única en la Universidad Javeriana en Bogotá, Colombia, donde los perros reciben la atención y cuidado que se merecen."
    ],
    [
      "Petly se encuentra ubicada en la Universidad Javeriana en Bogotá, Colombia. Este enclave académico brinda un entorno ideal para la atención veterinaria, donde la excelencia académica se combina con el cuidado profesional de los perros.",
      "La veterinaria Petly tiene su sede en la Universidad Javeriana en Bogotá, Colombia. Esta ubicación estratégica permite un acceso conveniente para los estudiantes, profesores y residentes de la zona, asegurando así que la atención veterinaria de calidad esté al alcance de todos.",
      "Petly tiene su hogar en la Universidad Javeriana en Bogotá, Colombia. Esta ubicación privilegiada proporciona un ambiente académico y cultural único, donde el compromiso con la educación y el bienestar animal se entrelazan para ofrecer un servicio excepcional a nuestros clientes peludos."
    ],
    [
      "El horario de atención de Petly es de lunes a viernes, de 9am a 5pm. Durante estas horas, nuestro equipo de profesionales está disponible para brindar servicios veterinarios de alta calidad y atención personalizada a cada perro que nos visita.",
      "En Petly, estamos comprometidos con el bienestar de los perros, por eso nuestro horario de atención es de lunes a viernes, desde las 9am hasta las 5pm. Estamos disponibles para ofrecer servicios veterinarios de calidad y cuidado integral a nuestros clientes caninos.",
      "Petly abre sus puertas de lunes a viernes, de 9am a 5pm, para ofrecer una amplia gama de servicios veterinarios a nuestros amigos peludos. Durante estas horas, nuestro equipo está dedicado a proporcionar atención experta y amorosa a cada perro que nos visita."
    ],
    [
      "No, en Petly nos enfocamos exclusivamente en atender a perros. Nuestros servicios están diseñados específicamente para satisfacer las necesidades de estas mascotas tan especiales, garantizando así la mejor atención y cuidado posible.",
      "En Petly nos especializamos en el cuidado de los perros, por lo que no atendemos a otras mascotas. Esto nos permite concentrar todos nuestros recursos y conocimientos en ofrecer servicios de alta calidad que promuevan la salud y felicidad de nuestros amigos caninos.",
      "En Petly, nuestro compromiso es con los perros. Por eso, nos dedicamos exclusivamente a atender a esta especie, ofreciendo una variedad de servicios diseñados para satisfacer todas sus necesidades de salud y bienestar."
    ],
    [
      "Petly ofrece una amplia gama de servicios veterinarios para perros, incluyendo vacunación, cirugía veterinaria, consulta veterinaria, spa - peluquería, guardería, fisioterapia, laboratorio - diagnóstico y cuidado dental. Cada servicio está diseñado para garantizar la salud y felicidad de nuestras mascotas caninas.",
      "En Petly, nos enorgullece ofrecer una variedad de servicios veterinarios para perros, que incluyen vacunación, cirugía veterinaria, consulta veterinaria, spa - peluquería, guardería, fisioterapia, laboratorio - diagnóstico y cuidado dental. Nuestro equipo altamente capacitado está comprometido con brindar la mejor atención posible a cada perro que nos visita.",
      "Petly se destaca por ofrecer una amplia gama de servicios para el cuidado de los perros. Desde vacunación y cirugía veterinaria hasta spa y cuidado dental, nuestro objetivo es proporcionar a nuestros clientes peludos la atención integral que se merecen."
    ]
  ];


  hacerPregunta() {
    this.realizada = false;
    
    setTimeout(() => {
      this.realizada = true;
    }, 500);
    
    const selectElement = document.getElementById("pregunta") as HTMLSelectElement;
    const index = selectElement.selectedIndex;

    const pregunta = this.preguntas[index-1];
    const preguntada = document.getElementById("preguntaUsuario") as HTMLElement;
    preguntada.innerHTML = pregunta;

    this.respondida = false;
    setTimeout(() => {
      this.responder(index-1);
    }, 1500);
  }

  responder(index: number) {
    const respuesta = document.getElementById("respuestaBot") as HTMLElement;

    let randomIndex = Math.floor(Math.random() * 3);

    if(randomIndex == this.anterior) {
      while(randomIndex == this.anterior) {
        randomIndex = Math.floor(Math.random() * 3);
      }
    }

    this.anterior = randomIndex;

    respuesta.innerHTML = this.respuestas[index][randomIndex];
    this.respondida = true;
  }
}
