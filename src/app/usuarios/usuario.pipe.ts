import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'nombreusuario'})

export class NombreUsuarioPipe implements PipeTransform {
    private NombreUsuario1:String;
    transform(NombreUsuario: String){
        if (NombreUsuario.includes('Mrs.') || (NombreUsuario.includes('Mr.') || (NombreUsuario.includes('Miss.') || (NombreUsuario.includes('Ms.'))))){
            this.NombreUsuario1 = NombreUsuario.split(' ')[1]  
        }   
        else{
            this.NombreUsuario1 = NombreUsuario.split(' ')[0]  
        }
        return this.NombreUsuario1;
    }
      
}