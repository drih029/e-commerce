import { Injectable, signal } from "@angular/core";
import { Signal } from "@angular/core";
import { computed } from "@angular/core";
import { single } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class CarrinhoService {
    //! Estado Global
    private carrinho = signal<{nome: string; preco: number}[]>([]);
    //? Seletores
    itens = computed (()=> this.carrinho());
    quantidadesdeItens= computed (() => this.carrinho().length); 
    totalItens = computed(()=>
   this.carrinho().reduce((total,item)=>total+item.preco,0)
);
//TODO: Ações
adicionar(produto:{nome:string; preco:number}){
    this.carrinho.update(lista => [...lista, produto ]);
}
limpar(){
    this.carrinho.set([]);
}
}