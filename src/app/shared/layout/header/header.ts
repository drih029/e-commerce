import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { Inject } from '@angular/core';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterLink,UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = '𝗠𝗔𝗥𝗧𝗘𝗟 🐧​'
  private carrinhoService = inject(CarrinhoFacade);
  private authService = inject(AuthService);

  quantidade = this.carrinhoService.quantidadeCarrinho;
  usuarioLogado = this.authService.usuarioLogado;
  usuarioAtual = this.authService.usuarioAtual;
  sair() {
this.authService.logout();
}
}

