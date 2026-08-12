import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



export const httpInterceptor: HttpInterceptorFn = (req, next) => {


const authService = inject(AuthService);
const router =inject(Router);
const token =authService.obterToken();
// LOG REQUEST
console.log('Requisição', req.url);
// TOKEN
const novaReq = token?
 req.clone({
   setHeaders: {
    Authorization: `Bearer ${token}`,
    },
}): req;
// SEGUE COM A NOVA REQUEST + LOG RESPONDE
return next(novaReq).pipe(
tap({
next: (event) => console.log('RESPONSE:', event),
error: (error) => console.error('ERRO:', error),
}),
catchError((error) => {

console.error('ERRO GLOBAL:', error);

if (error.status === 401) {
console.warn('Não autorizado!');
authService.logout();
router.navigateByUrl('/login');

}
if(error.status === 402){
    console.warn('Não autorizado, fazer login');
}
if(error.status === 403){
    console.warn('acesso negado, perfil sem permissão!')
    router.navigateByUrl('/produtos')
}

if (error.status === 500) {
console.warn('Erro interno do servidor!');
}
return throwError(() => error);
}),
);
};