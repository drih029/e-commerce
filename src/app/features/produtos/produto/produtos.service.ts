import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { inject } from "@angular/core";

type ProdutoAPI ={
    title: string;
    price: number;
};
type Produto = {
    nome: string;
    preco: number;
};

@Injectable({providedIn: 'root'})
export class produtoService {
    private http = inject(HttpClient);

    private API = 'https://fakestoreapi.com/products';

    buscarProduto(){
        return this.http.get<ProdutoAPI[]>(this.API);
    }
    transformarProdutos(dados:ProdutoAPI[]):Produto[]{
        return dados.map((p) =>({
            nome: p.title,
            preco: p.price,
         }));
    }
}
