import { Component } from '@angular/core';
import { Study } from './Study';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  habilidades: string[] = [
    "Java","Spring Boot","Postgress","MySql","php","Git y Github","POO","Scrum","MicroServicios","Poostman"
  ]

  estudios: Study[] = [
    {
      Titulo : "Tecnico Universitario en Desarrollo de Aplicaciones",
      Institucion : "UNICEN(EXA)",
      Fecha: "Feb 2023 - Dic 2024",
    },
    {
      Titulo : "Programador Front-End",
      Institucion : "Instituto Amemt",
      Fecha: "Aug 2020 - Abr 2021",
    },
    {
      Titulo : "Tecnico en Produccion Agropecuaria con orientacion en agroalimentos",
      Institucion : "Escuela Secundaria Agraria N1",
      Fecha: "Mar 2021 - Dic 2021",
    },
    {
      Titulo : "Bachillerato Agrario",
      Institucion : "Escuela Secundaria Agraria N1",
      Fecha: "Mar 2015 - Dic 2020",
    },
  ];
    
}
