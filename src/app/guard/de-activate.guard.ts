import { CanDeactivateFn } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';
import Swal from 'sweetalert2';
import { inject } from '@angular/core';

export const deActivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(!inject(BaseDatosService).activado)
  {
    Swal.fire({
      text: "Debes aceptar los terminos para continuar",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: 'top-right',
      icon:'error',
    })
  }
  return inject(BaseDatosService).activado;
};
