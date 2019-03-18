import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../services/clientes.service'


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: any = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  	this.clientesService.getClientes().subscribe(
  		res => {
  			this.clientes = res;
  		},
  		err => console.error(err)
  	)

  }

}
