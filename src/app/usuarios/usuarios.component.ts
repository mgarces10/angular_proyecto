import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  private user: Array<Object>;
  private id: Array<Object>;
  private name: Array<Object>;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.obtenerUsuarios().subscribe(
      dato => this.user = dato,
      err => console.log(err),
      () =>  console.log(this.user)
      
    );
  }
}
