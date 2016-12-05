import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpService} from './http.service';
import { FormularioComponent } from './formulario/formulario.component';
import {NombreUsuarioPipe} from './usuarios/usuario.pipe';
import { ValidacionService } from './formulario/validacion.service';
import { ControlMessages} from './formulario/mensajes.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    FormularioComponent,
    NombreUsuarioPipe,
    ControlMessages
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    RouterModule.forRoot([{
      path: 'app-usuarios',
      component: UsuariosComponent
    }]),
    RouterModule.forRoot([{
      path: 'app-formulario',
      component: FormularioComponent
    }])
  ],
  providers: [HttpService, ValidacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
