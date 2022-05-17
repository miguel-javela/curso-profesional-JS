console.log("helo TS");

function add(a:number, b:number){
    return a+b;
}

const sum = add(2,3)

//boolean
let muted:boolean = true;

//numeros
let numerador: number = 42
let denominador: number = 6

//string

//arreglos
let people: string[] = [];//arreglo de strings
people = ["isa", "raul"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("ricardo");
peopleAndNumbers.push(90)

//enum
enum Color{
    rojo = "rojo",
    verde = "verde",
    azul = "azul"
}

let colorFavorito : Color = Color.verde;
console.log(`colo fav ${colorFavorito}`)

//any
let comodin: any= "joker";
comodin = {type: 'wildcard'}

//object
let someObject: Object = {type: 'wildcard'}