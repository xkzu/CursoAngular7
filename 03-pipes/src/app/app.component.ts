import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Álvaro';
  nombre2 = 'ÁlVaRo AnToNio VeGa PaVez';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: '19'
    }
  };

  valorPromesa = new Promise(( resolve, reject ) => {
    setTimeout(() => resolve('Llegó la data!'), 3500);
  });

  fecha = new Date();
  video = "tgbNymZ7vqY";
  activar: boolean = true;
}
