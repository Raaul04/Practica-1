import{lugares,objetos,personajes} from "./data"
import { Personaje } from "./types"

export const listarLugares=()=>{
    lugares.forEach((l)=>{
        console.log(l.nombre+" , peligro:"+ l.peligro)
    })
}

export const buscarPersonaje=(nombre:string)=>{
const resultado = personajes.filter((p) => {
  if (p.nombre === nombre) {
   console.log(
  `Encontrado: ${p.nombre}, fuerza: ${p.fuerza}, ${p.aliado ? "Aliado" : "Enemigo"}`
  );
    return true; 
  } 
  return false;
});
}

export const inventarioConFrases=():string[]=>{

  return objetos.map((o)=>{
    return `${o.nombre}(+${o.poder} poder, categoria:${o.categoria})`
  })




}