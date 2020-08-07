import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    this.escritoresService.getAll()
      .then(arrEscritores => {
        this.escritores = arrEscritores;
      }).catch(err => console.log(err));
  }

  // async ngOnInit() {
  //   this.escritores = await this.escritoresService.getAll();
  // }

  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.escritores = await this.escritoresService.getAll();
    } else {
      this.escritores = await this.escritoresService.getByPais($event.target.value);
    }
  }

  onClick() {
    // Generar un Escritor y enviarlo al array
    const nuevoEscritor = new Escritor(9, 'Mario', 'Girón', 'http://....', 'españa');
    this.escritoresService.add(nuevoEscritor)
      .then(arrEscritores => {
        this.escritores = arrEscritores;
      })
      .catch(error => console.log(error));
  }

}