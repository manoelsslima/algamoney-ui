import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lancamentos = [
    { tipo : 'RECEITA', descricao: 'Venda de software', dataVencimento: '21/11/2023', dataPagamento: null, valor: 8000.00, pessoa: 'Drogaria Saúde' },
    { tipo : 'RECEITA', descricao: 'Aluguel', dataVencimento: '05/12/2023', dataPagamento: null, valor: 1200.00, pessoa: 'Fernando Pessoa' },
    { tipo : 'DESPESA', descricao: 'Compra de pão', dataVencimento: '19/11/2023', dataPagamento: null, valor: 6.50, pessoa: 'Padaria pão de mel' },
    { tipo : 'DESPESA', descricao: 'Impostos', dataVencimento: '30/11/2023', dataPagamento: null, valor: 2350.00, pessoa: 'Ministério da Fazenda' },
    { tipo : 'DESPESA', descricao: 'Mensalidade da escola', dataVencimento: '05/12/2023', dataPagamento: null, valor: 400.00, pessoa: 'Cantinho do saber' },
    { tipo : 'DESPESA', descricao: 'Mensalidade da academia', dataVencimento: '30/11/2023', dataPagamento: null, valor: 120.00, pessoa: 'Top life +' },
    { tipo : 'RECEITA', descricao: 'Venda do carro', dataVencimento: '19/11/2023', dataPagamento: null, valor: 65000.00, pessoa: 'João Ferreira' },
    { tipo : 'DESPESA', descricao: 'Feira', dataVencimento: '19/11/2023', dataPagamento: null, valor: 750.00, pessoa: 'Mercado pague bem' },
    { tipo : 'DESPESA', descricao: 'Seguro do carro', dataVencimento: '05/12/2023', dataPagamento: null, valor: 3200.00, pessoa: 'Seguradora Líder' },
    { tipo : 'DESPESA', descricao: 'Barbearia', dataVencimento: '10/11/2023', dataPagamento: null, valor: 45.00, pessoa: 'Style man' },
    { tipo : 'DESPESA', descricao: 'Posto de lavagem', dataVencimento: '18/11/2023', dataPagamento: null, valor: 50.00, pessoa: 'Lava-jato do marquinhos' }
  ];
}
