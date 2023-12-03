import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {

  tipos = [
    { label: 'Receita', value: 'RECEITA'},
    { label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
    { label: 'Software', value: 3 },
    { label: 'Impostos', value: 4 },
  ];

  pessoas = [
    { label: 'João da Silva', value: 1 },
    { label: 'Sebastião Salgado', value: 2 },
    { label: 'Tenório Aquino', value: 3 },
    { label: 'Ubirajara Veneza', value: 4 },
    { label: 'Vitória Gomes', value: 5 },
  ]
}
