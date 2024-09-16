class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    hacerSonido(){
        //console.log("Grr")
    }
}
class Perro extends Animal {
    constructor(nombre, edad){
        super(nombre, edad)
    }
    hacerSonido(){
       console.log("guau guau")
    }
}
class Gato extends Animal {
    constructor(nombre, edad){
        super(nombre, edad)
    }
    hacerSonido(){
       console.log("Miau")
    }
}
class Pajaro extends Animal {
    constructor(nombre, edad){
        super(nombre, edad)
    }
    hacerSonido(){
       console.log("Pio")
    }
}
function crearAnimal(tipo, nombre, edad) {
    switch (tipo) {
        case "perro":
            return new Perro(nombre, edad);
            case "Gato":
                return new Gato(nombre, edad);
                case "Pajaro":
                    return new Pajaro(nombre, edad);
                    default:
                        return "Tipo de animal no identificado";
    }
}
const miperrito = crearAnimal("perro", "bodoque", 2)
miperrito.hacerSonido()
