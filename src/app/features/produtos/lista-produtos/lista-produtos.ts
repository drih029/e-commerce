import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos =[
    {nome: 'Teclado Gamer',preco:49.99},
    {nome: 'Mouse Gamer',preco: 29.99},
    {nome: 'Monotor Gamer',preco:599.99},
    {nome: 'Dekstop Gamer',preco:4999.99},
    {nome: 'Headset Gamer',preco:699.99}
 ]
 exibirProduto (nome: string){
  console.log ('Produto Selecionado:', nome);
 }
}