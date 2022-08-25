import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: ['M', Validators.required],
    terminos:[false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.miFormulario.reset({...this.persona, condiciones:false});
    
    
    
    this.miFormulario.valueChanges.subscribe( form =>{
      delete form.condiciones;
      this.persona = form;
      
    });
  }
    
  guardar() {

    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;

  
}

}
