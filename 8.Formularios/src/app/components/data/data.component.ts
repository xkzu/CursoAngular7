import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:object = {
    nombreCompleto: {
      nombre: "alvaro",
      apellido: "vega"
    },
    correo: "alvaro.vegap@gmail.com",
    pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() {

    console.log(this.usuario);
    
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })


    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    this.forma.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    })
    this.forma.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    })

  }

  ngOnInit() {
  }

  noIgual(control: FormControl): {[s:string]:boolean} {

    console.log(this);
    let forma:any = this;

    if(control.value !== forma.controls['password1'].value){
      return {
        noIguales:true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'strider'){
            resolve({existe:true})
          }else{
            resolve(null)
          }
        }, 3000)
      }
    )
    return promesa;
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }

  guardarCambios(){
    console.log('guardando cambios');

    this.forma.reset({
      nombreCompleto: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    });
  }

  

}
