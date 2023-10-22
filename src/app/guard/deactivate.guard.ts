import { CanDeactivateFn } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';
import { inject } from '@angular/core';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return !inject(BaseDatosService).logeado;
};
