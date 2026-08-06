import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { Inject } from '@angular/core';
import { CarrinhoService } from '../../../core/services/carrinho.service';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterLink,UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Martel'
  private carrinhoService = inject(CarrinhoService);
  quantidade = this.carrinhoService.quantidadesdeItens;
}
