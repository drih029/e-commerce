import { signal, Signal } from "@angular/core";
export const usuarioLogado = signal ( false)
//!Define signal usuariLogado como (true),Permite acesso as rotas
export function login(){
    usuarioLogado.set(true);
}
//!Define signal usuarioLogado com (false), bloqueia acesso imediatamente
export function logout(){
    usuarioLogado.set(false);
}