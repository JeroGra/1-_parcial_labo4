import { Injectable } from '@angular/core';
import { Firestore, updateDoc, } from '@angular/fire/firestore';
import { getDocs,setDoc,doc,addDoc,collection,deleteDoc } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Contenedor } from '../clases/contenedor';



@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {


  public logeado = false;
  public userLog: any | null = null
  usuarios:Array<any> = []
  productos:Array<any> = []

  constructor(private firestore:Firestore) { }


  /*Alta(pelicula:any)
  {
    const coleccion = collection(this.firestore,'x')
    addDoc(coleccion,pelicula.toFirestore());
    //this.TraerPeliculas()
  }*/

  
  AltaProducto(producto:any)
  {
    const coleccion = collection(this.firestore,'productos')
    addDoc(coleccion,JSON.parse(JSON.stringify(producto)));
    //this.TraerPeliculas()
  }

  AltaContainer(contenedor:Contenedor)
  {
    const coleccion = collection(this.firestore,'contenedores')
    const documento = doc(coleccion);
    const id = documento.id;
    contenedor.id = id;
    let obj = JSON.parse(JSON.stringify(contenedor));
    setDoc(documento,obj);
  }
  
 /* async Traer()
  {
    //this.peliculas = []
    const coleccion = collection(this.firestore,'x')
    const docs = await getDocs(coleccion);
    docs.forEach((doc) => {
      let peli:any = doc.data();
      peli.id = doc.id;
     // this.peliculas.push(peli);
    });
  
   // this.peliculas = JSON.parse(JSON.stringify(this.peliculas)) as Array<Pelicula>
  }*/

  async TraerUsers()
  {
    this.usuarios = []
    const coleccion = collection(this.firestore,'usuarios')
    const docs = await getDocs(coleccion);
    docs.forEach((doc) => {
      let peli:any = doc.data();
      peli.id = doc.id;
      this.usuarios.push(peli);
    });
  
    this.usuarios = JSON.parse(JSON.stringify(this.usuarios)) as Array<any>
  }

   TraerProductos()
  {
    this.usuarios = []
    const coleccion = collection(this.firestore,'productos')
    return collectionData(coleccion);
  }

  TraerContainers()
  {
    this.usuarios = []
    const coleccion = collection(this.firestore,'contenedores')
    return collectionData(coleccion);
  }


  /*Actualizar(id:string)
  {
    const coleccion = collection(this.firestore,'x')
    const documento = doc(coleccion,id);
    updateDoc(documento,{

    })
  }*/

  ActualizarContainer(id:string,container:Contenedor)
  {
    const coleccion = collection(this.firestore,'contenedores')
    const documento = doc(coleccion,id);
    let obj = JSON.parse(JSON.stringify(container));
    updateDoc(documento,obj);
  }

  /*Eliminar(id:any)
  {
    const coleccion = collection(this.firestore,'x')
    const documento = doc(coleccion,id);
    deleteDoc(documento);
  }*/

  
  EliminarContainer(id:string)
  {
    const coleccion = collection(this.firestore,'contenedores')
    const documento = doc(coleccion,id);
    deleteDoc(documento);
  }

  logIn(user:any)
  {
    this.logeado = true;
    this.userLog = {
      nombre:user.nombre,
      rol:user.rol,
      email:user.email,
      pass:user.pass
    }
  }

  logOut()
  {
    this.userLog = null;
    this.logeado = false;
  }


}
