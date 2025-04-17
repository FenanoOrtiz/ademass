type Perro = {
    nombrePerro:string;
    edad: number;
    ladra: boolean;
}

type Gato = {
    nombreGato: string;
    edad: number;
    trepa: boolean;
}

type SeleccionAnimal<T extends 'perro' | 'gato' > = T extends "perro" ?Perro:Gato;

function  seleccionAnimal<T extends 'perro' | 'gato'>(animal:SeleccionAnimal<T>){
    console.log(animal);
}

seleccionAnimal<'gato'>({nombreGato:"cosita",edad: 4,trepa:true} );