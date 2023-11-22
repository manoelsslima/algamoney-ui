import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', status: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', status: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: false },
    { nome: 'Kacio Souza', cidade: 'Manaus', estado: 'AM', status: true },
    { nome: 'Iêda Silva', cidade: 'Rio Branco', estado: 'AC', status: false },
    { nome: 'Jefferson Lima', cidade: 'Porto Velho', estado: 'RO', status: true },
  ]
}
