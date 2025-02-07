import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  courses = [
    {
      title: 'Curso de Angular',
      description: 'Aprende Angular desde cero.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Curso de Bootstrap',
      description: 'Diseña interfaces modernas con Bootstrap.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Curso de TypeScript',
      description: 'Domina TypeScript para desarrollo web.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  activities = [
    {
      name: 'Inicio de Curso Angular',
      date: '2023-10-01',
      status: 'Completado'
    },
    {
      name: 'Inicio de Curso Bootstrap',
      date: '2023-10-05',
      status: 'En Progreso'
    },
    {
      name: 'Inicio de Curso TypeScript',
      date: '2023-10-10',
      status: 'Pendiente'
    }
  ];

}
