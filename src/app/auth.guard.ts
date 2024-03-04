import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const id:any = route.params['id'];

  if(id == '1') {
    return true;
  }

  const router = new Router();
  window.alert('Você não tem acesso a este usuário!');
  router.navigate(['/']);
  return false;
};
