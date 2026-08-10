import { CanActivateFn } from "@angular/router";
import { inject, Inject } from "@angular/core";
import { Router } from "express";
import { AuthService } from "./services/auth.service";

export const authGuard:CanActivateFn = () =>{
    const authService = inject(AuthService);
    const router =inject(Router);
    if(authService.usuarioLogado()){
        return true;
    }
    return router.createUrTree(['/login']);
}