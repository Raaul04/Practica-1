import{listarLugares,buscarPersonaje, inventarioConFrases} from "./funciones"

const index = () => {
  const opcion: number = 3; // Cambia este número para probar
 
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado = "Sabio"; // Cambia el nombre para probar
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases());
      break;
    case 4:
      //console.log(agruparObjetosPorCategoria());
      break;
    case 5:
      //console.log("Poder total:", poderTotalInventario());
      break;

    default:
      console.log("Opción no válida.");
  }
};

index()