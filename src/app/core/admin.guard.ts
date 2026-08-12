import { inject, Inject } from "@angular/core";
import { Router } from "express";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "./services/auth.service";

export const adminGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authService =inject(AuthService);

    //! - 1) Verificar se o usuário está logado
    if(!authService.usuarioLogado()){
        return router.createUrlTree(['/login']);
    }
    //! -2) Verificar se o usurio atual (logado), se tem perfil adm
    if (!authService.admin()){
        return router.createUrlTree(['/acessso-negado'])
    }
    //! -3) Se o usuario estiver logado  e for adm = ACESSO LIBERADO   
    return true;
};