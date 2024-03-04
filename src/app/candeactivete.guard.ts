import { CanDeactivateFn } from '@angular/router';

export const candeactiveteGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  return window.confirm("Deseja realmente sair?");

};
