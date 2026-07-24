import { HttpInterceptorFn } from "@angular/common/http";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    //! TOKEN
    const token = 'fake-jwt-token';
    const novaReq = req.clone ({
        setHeaders: {
            Authorization:`Bearer ${token}`,
         },
    });
     console.log('Interceptando requisição:', req.url);
    return next(novaReq);
};