import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router'; //Remover impotação do RouterOutlet, pois não é necessário para o componente App
import { Produto } from './features/produtos/produto/produto';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja= ' Martel Tech';//nome do e-commerce
}
 
  