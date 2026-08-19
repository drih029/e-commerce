import { Component,Input, Output ,EventEmitter } from "@angular/core";
import { UpperCasePipe, CurrencyPipe } from "@angular/common";
import { PrecoFormatadoPipe } from "../../shared/pipes/preco-formatado-pipe";
import { eventNames } from "process";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ItemCarrinho } from "../../core/models/item-carrinho";

@Component ({
    selector: 'app-produto',
    imports: [UpperCasePipe, PrecoFormatadoPipe, MatButtonModule, MatCardModule],
    template:'./produto.html',
    styleUrl: './produto.css',

})
export class Produto {
    //Entrada de dados de lista-produtos.ts
    @Input() nome: string = '';
    @Input() preco: number = 0;
    //Saída de dados de produtos selecionados para lista 
    @Output() produtoSelecionado = new EventEmitter<string>();
    selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);  
}
@Output() produtoAdicionado= new EventEmitter<ItemCarrinho>();
adicionarAoCarrinho() {
    this.produtoAdicionado.emit({nome: this.nome, preco: this.preco});
}
}