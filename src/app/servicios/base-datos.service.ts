import { Injectable } from '@angular/core';
import { Firestore, updateDoc, } from '@angular/fire/firestore';
import { getDocs,setDoc,doc,addDoc,collection,deleteDoc } from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {


  public logeado = false;
  userLog: any | null = null
  usuarios:Array<any> = []

  constructor(private firestore:Firestore) { }


  Alta(pelicula:any)
  {
    const coleccion = collection(this.firestore,'x')
    addDoc(coleccion,pelicula.toFirestore());
    //this.TraerPeliculas()
  }

  
  AltaProducto(producto:any)
  {
    const coleccion = collection(this.firestore,'productos')
    addDoc(coleccion,producto);
    //this.TraerPeliculas()
  }
  
  async Traer()
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
  }

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

  Actualizar(id:string)
  {
    const coleccion = collection(this.firestore,'x')
    const documento = doc(coleccion,id);
    updateDoc(documento,{

    })
  }

  Eliminar(id:any)
  {
    const coleccion = collection(this.firestore,'x')
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
    this.logeado = false;
  }


}
