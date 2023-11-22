import { CanActivateFn } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';


export const activateGuard: CanActivateFn = (route, state) => {

  if(!inject(BaseDatosService).logeado)
  {
    Swal.fire({
      text: "No tienes los permisos para acceder",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: 'top-right',
      icon:'error',
    })
  }
  return inject(BaseDatosService).logeado;
};

export const activateGuardRol: CanActivateFn = (route, state) => {
  let userRol =  inject(BaseDatosService).userLog.rol

  if(userRol !== "admin")
  {
    Swal.fire({
      text: "No tienes los permisos para acceder",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: 'top-right',
      icon:'error',
    })
  }

  return inject(BaseDatosService).logeado && userRol === "admin";
};

export const activateGuardLog: CanActivateFn = (route, state) => {

  if(inject(BaseDatosService).logeado)
  {
    Swal.fire({
      text: "Ya estas logeado!!",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: 'top-right',
      icon:'error',
    })
  }
  return !inject(BaseDatosService).logeado;
};