import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo : 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2023,10,21), dataPagamento: null, valor: 8000.00, pessoa: 'Drogaria Saúde' },
    { tipo : 'RECEITA', descricao: 'Aluguel', dataVencimento: new Date(2023,11,5), dataPagamento: null, valor: 1200.00, pessoa: 'Fernando Pessoa' },
    { tipo : 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2023,10,19), dataPagamento: null, valor: 6.50, pessoa: 'Padaria pão de mel' },
    { tipo : 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2023,10,30), dataPagamento: null, valor: 2350.00, pessoa: 'Ministério da Fazenda' },
    { tipo : 'DESPESA', descricao: 'Mensalidade da escola', dataVencimento: new Date(2023,11,5), dataPagamento: null, valor: 400.00, pessoa: 'Cantinho do saber' },
    { tipo : 'DESPESA', descricao: 'Mensalidade da academia', dataVencimento: new Date(2023,10,30), dataPagamento: null, valor: 120.00, pessoa: 'Top life +' },
    { tipo : 'RECEITA', descricao: 'Venda do carro', dataVencimento: new Date(2023,10,19), dataPagamento: null, valor: 65000.00, pessoa: 'João Ferreira' },
    { tipo : 'DESPESA', descricao: 'Feira', dataVencimento: new Date(2023,10,19), dataPagamento: null, valor: 750.00, pessoa: 'Mercado pague bem' },
    { tipo : 'DESPESA', descricao: 'Seguro do carro', dataVencimento: new Date(2023,11,5), dataPagamento: null, valor: 3200.00, pessoa: 'Seguradora Líder' },
    { tipo : 'DESPESA', descricao: 'Barbearia', dataVencimento: new Date(2023,10,10), dataPagamento: null, valor: 45.00, pessoa: 'Style man' },
    { tipo : 'DESPESA', descricao: 'Posto de lavagem', dataVencimento: new Date(2023,10,18), dataPagamento: null, valor: 50.00, pessoa: 'Lava-jato do marquinhos' }
  ];
}
