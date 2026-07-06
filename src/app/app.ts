import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; //Remover impotação do RouterOutlet, pois não é necessário para o componente App
import { Produto } from './components/produto/produto';
@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
