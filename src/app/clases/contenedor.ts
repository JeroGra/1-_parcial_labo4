import { Producto } from "./producto"

export class Contenedor {

    id?:string
    codigo?:string
    color?:any
    empresa?:string
    capacidad?:number
    productos : Array<Producto> = []
}
