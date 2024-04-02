import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaFakeService {
  constructor() {}

  mascotaList: Mascota[] = [
    {
      id: 1,
      nombre: 'Bailey',
      raza: 'Shih Tzu',
      edad: 8,
      peso: 17,
      enfermedad: 'Cistitis',
      foto: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '111',
        nombre: 'Alejandro',
        apellido: 'Suarez',
        correo: 'alejandro@gmail.com',
        celular: '111',
      },
    },
    {
      id: 2,
      nombre: 'Buddy',
      raza: 'Pomeranian',
      edad: 5,
      peso: 7,
      enfermedad: 'Cáncer',
      foto: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '222',
        nombre: 'Hermann',
        apellido: 'Hernandez',
        correo: 'Hermann@gmail.com',
        celular: '222',
      },
    },
    {
      id: 3,
      nombre: 'Lola',
      raza: 'Yorkshire Terrier',
      edad: 12,
      peso: 18,
      enfermedad: 'Diarrea',
      foto: 'https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '333',
        nombre: 'Nicolas',
        apellido: 'Rincon',
        correo: 'nicolas@gmail.com',
        celular: '333',
      },
    },
    {
      id: 4,
      nombre: 'Penny',
      raza: 'Maltese',
      edad: 10,
      peso: 11,
      enfermedad: 'Displasia de cadera',
      foto: 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=',
      estado: 'Disponible',
      cliente: {
        cedula: '444',
        nombre: 'Juan',
        apellido: 'Granada',
        correo: 'juan@gmail.com',
        celular: '444',
      },
    },
    {
      id: 5,
      nombre: 'Lola',
      raza: 'Golden Retriever',
      edad: 7,
      peso: 20,
      enfermedad: 'Gastroenteritis',
      foto: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg',
      estado: 'Inactivo',
      cliente: {
        cedula: '555',
        nombre: 'Andres',
        apellido: 'Garcia',
        correo: 'andres@gmail.com',
        celular: '555',
      },
    },
    {
      id: 6,
      nombre: 'Murphy',
      raza: 'Boxer',
      edad: 6,
      peso: 21,
      enfermedad: 'Displasia de cadera',
      foto: 'https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '666',
        nombre: 'Santiago',
        apellido: 'Yañez',
        correo: 'santiago@gmail.com',
        celular: '666',
      },
    },
    {
      id: 7,
      nombre: 'Bear',
      raza: 'Maltese',
      edad: 6,
      peso: 18,
      enfermedad: 'Alergias cutáneas',
      foto: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '111',
        nombre: 'Alejandro',
        apellido: 'Suarez',
        correo: 'alejandro@gmail.com',
        celular: '111',
      },
    },
    {
      id: 8,
      nombre: 'Tucker',
      raza: 'Siberian Husky',
      edad: 8,
      peso: 9,
      enfermedad: 'Displasia de cadera',
      foto: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '222',
        nombre: 'Hermann',
        apellido: 'Hernandez',
        correo: 'Hermann@gmail.com',
        celular: '222',
      },
    },
    {
      id: 9,
      nombre: 'Sandy',
      raza: 'Chihuahua',
      edad: 11,
      peso: 23,
      enfermedad: 'Leptospirosis',
      foto: 'https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '333',
        nombre: 'Nicolas',
        apellido: 'Rincon',
        correo: 'nicolas@gmail.com',
        celular: '333',
      },
    },
    {
      id: 10,
      nombre: 'Jack',
      raza: 'German Shepherd',
      edad: 7,
      peso: 7,
      enfermedad: 'Cálculos urinarios',
      foto: 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=',
      estado: 'Disponible',
      cliente: {
        cedula: '444',
        nombre: 'Juan',
        apellido: 'Granada',
        correo: 'juan@gmail.com',
        celular: '444',
      },
    },
    {
      id: 11,
      nombre: 'Zeus',
      raza: 'Maltese',
      edad: 4,
      peso: 9,
      enfermedad: 'Obesidad',
      foto: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg',
      estado: 'Inactivo',
      cliente: {
        cedula: '555',
        nombre: 'Andres',
        apellido: 'Garcia',
        correo: 'andres@gmail.com',
        celular: '555',
      },
    },
    {
      id: 12,
      nombre: 'Princess',
      raza: 'Boston Terrier',
      edad: 11,
      peso: 8,
      enfermedad: 'Cálculos urinarios',
      foto: 'https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '666',
        nombre: 'Santiago',
        apellido: 'Yañez',
        correo: 'santiago@gmail.com',
        celular: '666',
      },
    },
    {
      id: 13,
      nombre: 'Oscar',
      raza: 'Australian Shepherd',
      edad: 4,
      peso: 20,
      enfermedad: 'Hipotiroidismo',
      foto: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '111',
        nombre: 'Alejandro',
        apellido: 'Suarez',
        correo: 'alejandro@gmail.com',
        celular: '111',
      },
    },
    {
      id: 14,
      nombre: 'Lola',
      raza: 'Saint Bernard',
      edad: 9,
      peso: 13,
      enfermedad: 'Obesidad',
      foto: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '222',
        nombre: 'Hermann',
        apellido: 'Hernandez',
        correo: 'Hermann@gmail.com',
        celular: '222',
      },
    },
    {
      id: 15,
      nombre: 'Sasha',
      raza: 'Yorkshire Terrier',
      edad: 3,
      peso: 22,
      enfermedad: 'Diarrea',
      foto: 'https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '333',
        nombre: 'Nicolas',
        apellido: 'Rincon',
        correo: 'nicolas@gmail.com',
        celular: '333',
      },
    },
    {
      id: 16,
      nombre: 'Charlie',
      raza: 'Boxer',
      edad: 8,
      peso: 8,
      enfermedad: 'Hipertensión',
      foto: 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=',
      estado: 'Disponible',
      cliente: {
        cedula: '444',
        nombre: 'Juan',
        apellido: 'Granada',
        correo: 'juan@gmail.com',
        celular: '444',
      },
    },
    {
      id: 17,
      nombre: 'Leo',
      raza: 'Golden Retriever',
      edad: 3,
      peso: 20,
      enfermedad: 'Cálculos urinarios',
      foto: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg',
      estado: 'Inactivo',
      cliente: {
        cedula: '555',
        nombre: 'Andres',
        apellido: 'Garcia',
        correo: 'andres@gmail.com',
        celular: '555',
      },
    },
    {
      id: 18,
      nombre: 'Duke',
      raza: 'Boxer',
      edad: 8,
      peso: 24,
      enfermedad: 'Artritis',
      foto: 'https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '666',
        nombre: 'Santiago',
        apellido: 'Yañez',
        correo: 'santiago@gmail.com',
        celular: '666',
      },
    },
    {
      id: 19,
      nombre: 'Apolo',
      raza: 'Labrador Retriever',
      edad: 14,
      peso: 6,
      enfermedad: 'Gastroenteritis',
      foto: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '111',
        nombre: 'Alejandro',
        apellido: 'Suarez',
        correo: 'alejandro@gmail.com',
        celular: '111',
      },
    },
    {
      id: 20,
      nombre: 'Oscar',
      raza: 'Chihuahua',
      edad: 13,
      peso: 12,
      enfermedad: 'Cálculos urinarios',
      foto: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '222',
        nombre: 'Hermann',
        apellido: 'Hernandez',
        correo: 'Hermann@gmail.com',
        celular: '222',
      },
    },
    {
      id: 21,
      nombre: 'Winston',
      raza: 'Bulldog',
      edad: 4,
      peso: 12,
      enfermedad: 'Tos de las perreras',
      foto: 'https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '333',
        nombre: 'Nicolas',
        apellido: 'Rincon',
        correo: 'nicolas@gmail.com',
        celular: '333',
      },
    },
    {
      id: 22,
      nombre: 'Pepper',
      raza: 'Doberman Pinscher',
      edad: 5,
      peso: 16,
      enfermedad: 'Insuficiencia renal',
      foto: 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=',
      estado: 'Disponible',
      cliente: {
        cedula: '444',
        nombre: 'Juan',
        apellido: 'Granada',
        correo: 'juan@gmail.com',
        celular: '444',
      },
    },
    {
      id: 23,
      nombre: 'Lucy',
      raza: 'Rottweiler',
      edad: 14,
      peso: 15,
      enfermedad: 'Hepatitis',
      foto: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg',
      estado: 'Inactivo',
      cliente: {
        cedula: '555',
        nombre: 'Andres',
        apellido: 'Garcia',
        correo: 'andres@gmail.com',
        celular: '555',
      },
    },
    {
      id: 24,
      nombre: 'Duke',
      raza: 'Dachshund',
      edad: 3,
      peso: 16,
      enfermedad: 'Alergias cutáneas',
      foto: 'https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '666',
        nombre: 'Santiago',
        apellido: 'Yañez',
        correo: 'santiago@gmail.com',
        celular: '666',
      },
    },
    {
      id: 25,
      nombre: 'Apolo',
      raza: 'Doberman Pinscher',
      edad: 7,
      peso: 19,
      enfermedad: 'Hipertensión',
      foto: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '111',
        nombre: 'Alejandro',
        apellido: 'Suarez',
        correo: 'alejandro@gmail.com',
        celular: '111',
      },
    },
    {
      id: 26,
      nombre: 'Max',
      raza: 'Beagle',
      edad: 4,
      peso: 5,
      enfermedad: 'Diarrea',
      foto: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '222',
        nombre: 'Hermann',
        apellido: 'Hernandez',
        correo: 'Hermann@gmail.com',
        celular: '222',
      },
    },
    {
      id: 27,
      nombre: 'Harley',
      raza: 'Cavalier King Charles Spaniel',
      edad: 4,
      peso: 23,
      enfermedad: 'Artritis',
      foto: 'https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '333',
        nombre: 'Nicolas',
        apellido: 'Rincon',
        correo: 'nicolas@gmail.com',
        celular: '333',
      },
    },
    {
      id: 28,
      nombre: 'Harley',
      raza: 'Golden Retriever',
      edad: 2,
      peso: 18,
      enfermedad: 'Diabetes',
      foto: 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=',
      estado: 'Disponible',
      cliente: {
        cedula: '444',
        nombre: 'Juan',
        apellido: 'Granada',
        correo: 'juan@gmail.com',
        celular: '444',
      },
    },
    {
      id: 29,
      nombre: 'Gracie',
      raza: 'Pomeranian',
      edad: 2,
      peso: 16,
      enfermedad: 'Enfermedad periodontal',
      foto: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg',
      estado: 'Inactivo',
      cliente: {
        cedula: '555',
        nombre: 'Andres',
        apellido: 'Garcia',
        correo: 'andres@gmail.com',
        celular: '555',
      },
    },
    {
      id: 30,
      nombre: 'Roxy',
      raza: 'Cocker Spaniel',
      edad: 10,
      peso: 16,
      enfermedad: 'Diarrea',
      foto: 'https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '666',
        nombre: 'Santiago',
        apellido: 'Yañez',
        correo: 'santiago@gmail.com',
        celular: '666',
      },
    },
    {
      id: 31,
      nombre: 'Jack',
      raza: 'Cavalier King Charles Spaniel',
      edad: 1,
      peso: 20,
      enfermedad: 'Leptospirosis',
      foto: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '111',
        nombre: 'Alejandro',
        apellido: 'Suarez',
        correo: 'alejandro@gmail.com',
        celular: '111',
      },
    },
    {
      id: 32,
      nombre: 'Charlie',
      raza: 'Shih Tzu',
      edad: 4,
      peso: 24,
      enfermedad: 'Hepatitis',
      foto: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15665/production/_107435678_perro1.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '222',
        nombre: 'Hermann',
        apellido: 'Hernandez',
        correo: 'Hermann@gmail.com',
        celular: '222',
      },
    },
    {
      id: 33,
      nombre: 'Rosie',
      raza: 'Chihuahua',
      edad: 3,
      peso: 12,
      enfermedad: 'Hepatitis',
      foto: 'https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '333',
        nombre: 'Nicolas',
        apellido: 'Rincon',
        correo: 'nicolas@gmail.com',
        celular: '333',
      },
    },
    {
      id: 34,
      nombre: 'Charlie',
      raza: 'Cavalier King Charles Spaniel',
      edad: 11,
      peso: 12,
      enfermedad: 'Hepatitis',
      foto: 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=',
      estado: 'Disponible',
      cliente: {
        cedula: '444',
        nombre: 'Juan',
        apellido: 'Granada',
        correo: 'juan@gmail.com',
        celular: '444',
      },
    },
    {
      id: 35,
      nombre: 'Luna',
      raza: 'Bulldog',
      edad: 10,
      peso: 24,
      enfermedad: 'Gastroenteritis',
      foto: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg',
      estado: 'Inactivo',
      cliente: {
        cedula: '555',
        nombre: 'Andres',
        apellido: 'Garcia',
        correo: 'andres@gmail.com',
        celular: '555',
      },
    },
    {
      id: 36,
      nombre: 'Zoe',
      raza: 'Cavalier King Charles Spaniel',
      edad: 10,
      peso: 20,
      enfermedad: 'Luxación de rótula',
      foto: 'https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg',
      estado: 'Disponible',
      cliente: {
        cedula: '666',
        nombre: 'Santiago',
        apellido: 'Yañez',
        correo: 'santiago@gmail.com',
        celular: '666',
      },
    },
  ];

  findAll() {
    return this.mascotaList;
  }

  findById(id: number) {
    const mascotaBuscada: Mascota | undefined = this.mascotaList.find((mascota) => mascota.id === id);
    if (mascotaBuscada === undefined) {
        return this.mascotaList[0];
    }
    return mascotaBuscada;
  }

  updateMascota(mascota: Mascota) {
    const index = this.mascotaList.findIndex(m => m.id === mascota.id);
    this.mascotaList[index] = Object.assign({}, mascota);
  }

  deleteMascota(mascota: Mascota) {
    const index = this.mascotaList.findIndex(m => m.id === mascota.id);

    this.mascotaList[index].estado = this.mascotaList[index].estado === 'Disponible' ? 'Inactivo' : 'Disponible';
  }

  createMascota(mascota: Mascota) {
    mascota.id = (this.mascotaList.length + 1);
    this.mascotaList.push(mascota);
  }
}
