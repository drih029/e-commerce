import { Component, numberAttribute } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { produtoService } from '../produto/produtos.service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe,UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  //!remover a lista de produtos, dados carregados via API fakestoreapi

  produtos = signal<
  { nome: string;preco:number}[]> ([]);

  //? criar estado de carregamento,

  // **true: requisição em andamento, exibir dados no momento no templete

  //! false:esconder indicador e exibir,dados da lista produto

  carregando = signal(true);

  //! src/app/features/produtos/produto/produtos.service.ts 
//?=============MÉTODO HTTP (API) foi modificado para ProdutosService==========
  carregarProdutos(){
    this.carregando.set(true);//! Ativa loading
    this.erro.set(null);//?limpa o erro anterior

    this.produtoService.buscarProduto().subscribe({

      next: (dados) => {
      const produtos = this.produtoService.transformarProdutos(dados);
      this.produtos.set(produtos)
      this.carregando.set(false)
      },
      error:(error)=> {
        console.error('Erro ao carregar os produtos alterados')
        this.erro.set('Erro ao carregar os produtos.Verifique a conexão com a internet e tente novamente!.');
        this.carregando.set(false);
      }
    });
  }

 exibirProduto (nome: string){
 // console.log ('Produto Selecionado:', nome);
 this.produtoSelecionado.set(nome);
 }
adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual, 
     {nome: 'Processador Core i5 14550FS', preco: 2500}]);
}
totalProdutos = computed(() => this.produtos().length);

valorTotal = computed(() => { return this.produtos().reduce
  ((total, item) => total + item.preco, 0)});

  substituirProdutos() {
    this.produtos.set([
      {nome: 'Teclado', preco: 40},
      {nome: 'Mouser', preco: 10},
      {nome: 'Monitor', preco:100},
      {nome: 'Dekstop', preco:500},
      {nome:'Headset',preco:25},

    ]);
  }  //! injetar httpClient dentro de contruct, restruturar construct!!!
   constructor(){
    //!carregar a API
    this.carregarProdutos();
    //!effect continuam iguais
    effect(() => {
      console.log('Lista de produtos Alterados: ', this.produtos());
    });
    effect(() => {
      console.log('Valor total atualizado: ',  this.valorTotal());
    });
    effect(() => {
      if (typeof document !== 'undefined'){
       document.title = `Produtos (${this.totalProdutos()}) Minha Loja`; 
      }
    });
  } 
  produtoSelecionado = signal <string | null>(null);

  carrinho =signal < { nome: string; preco: number }[]>([]);
  erro = signal <string | null>(null);

  adicionaAoCarrinho(produto: { nome: string; preco: number }){
     this.carrinho.update(listaAtual => 
    [...listaAtual, produto]);}
    //?=============INJECT==============
      private produtoService =inject(produtoService)
    quantidadeCarrinho = computed(() => this.carrinho().length);
    totalCarrinho = computed (() => { 
      return this.carrinho().reduce((total, item) =>
        total + item.preco,0);
    });
}
