import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; //Remover impotação do RouterOutlet, pois não é necessário para o componente App
//import { Produto } from './features/produtos/produto/produto';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja= 'Mercado liso';
}
  
  