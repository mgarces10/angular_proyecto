import { Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidacionService } from './validacion.service';
import {HttpService} from '../http.service';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  form: FormGroup;
  constructor(httpservice: HttpService, @Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      nombre:['', Validators.required],
      nombreUser:['', Validators.required],
      email:['', ValidacionService.emailValidator],
      telefono:['', [ValidacionService.numerValidator, Validators.minLength(6)]]
    }
    );
  }
  }




