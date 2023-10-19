import { CanActivateFn } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';
import { inject } from '@angular/core';

export const activateGuard: CanActivateFn = (route, state) => {
  return inject(BaseDatosService).logeado;
};
