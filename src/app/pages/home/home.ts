import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  modalAbierto = false;

  proyectoSeleccionado: any = {};

  proyectos: any = {
    quemini: {
      nombre: 'QueMini',
      imagen: '/img/quemini.png',
      descripcion:
        'Sistema de gestión de pedidos desarrollado en Angular y TypeScript para la administración de ventas y control de pedidos.',

      tecnologias: ['Angular', 'TypeScript', 'CSS'],

      web: 'https://quemini.vercel.app',

      github: 'https://github.com/JuanJaramilloDev/facturacion-quemini'
    },

    portfolio: {
      nombre: 'Portfolio',

      imagen: 'assets/proyectos/portfolio.png',

      descripcion:
        'Portafolio profesional desarrollado en Angular para mostrar proyectos, habilidades y experiencia.',

      tecnologias: ['Angular', 'CSS'],

      web: 'https://tusitio.com',

      github: 'https://github.com/JuanJaramilloDev'
    },

    pos: {
      nombre: 'Sistema POS',

      imagen: 'assets/proyectos/pos.png',

      descripcion:
        'Sistema POS para gestión de ventas, productos y clientes.',

      tecnologias: ['Angular', 'SQLite', 'Electron'],

      web: 'https://tusitio.com',

      github: 'https://github.com/JuanJaramilloDev'
    }
  };

  abrirModal(proyecto: string): void {

    this.proyectoSeleccionado = this.proyectos[proyecto];

    this.modalAbierto = true;

    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {

    this.modalAbierto = false;

    document.body.style.overflow = 'auto';
  }

}