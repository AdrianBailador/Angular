import { Component } from '@angular/core';

@Component ({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'COMPONENTE DE FRUTA';
	public listado_frutas = 'Naranaja, Pera, Manzana, Sandia';
}