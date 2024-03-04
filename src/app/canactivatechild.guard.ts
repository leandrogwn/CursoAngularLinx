import { CanActivateChildFn, Router } from '@angular/router';

export const canactivatechildGuard: CanActivateChildFn = (childRoute, state) => {
  const id:any = childRoute.params['id'];

  if(id == '1') {
    return true;
  }

  const router = new Router();
  window.alert('Você não está autorizado a editar este usuário!');
  router.navigate(['/']);
  return false;
};
