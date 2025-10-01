export type Lugar = {
    id: number,
    nombre: string,
    tipo: string,
    peligro: number
};

export type Personaje = {
    id: number,
    nombre: string,
    fuerza: number,
    aliado: boolean,
}

export type Objeto = { 
    id: number; 
    nombre: string; 
    poder: number; 
    categoria: string 
};