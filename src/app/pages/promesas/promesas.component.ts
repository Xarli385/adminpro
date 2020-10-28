import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })

    // this.getUsuarios();

    /* const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola Mundo');
      } else {
        reject('Algo salió mal');
      }


    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    })
      .catch(error => console.log('Algo ocurrió en la promesa', error));

    console.log('Fin'); */
  }

  getUsuarios() {
    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => console.log(body));

    });
  }
}