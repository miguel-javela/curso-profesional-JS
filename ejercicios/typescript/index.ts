console.log("helo TS");

function add(a:number, b:number){
    return a+b;
}

const sum = add(2,3)

function createAdder(a:number): (number) => number{
    return function (b:number){
        return b + a;
    };
}

const addFour = createAdder(4)
console.log("addFour",addFour)
const fourPlus6 = addFour(6)
console.log("fourPlus6",fourPlus6)

//function fullName(firstName:string, lastName?:string){//lastname no es obligatorio
function fullName(firstName:string, lastName:string = "smith"){//valor por omision
    return `${firstName} ${lastName}`;
}

const richar = fullName("miguel")

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

enum Color{
    Rojo= "Rojo",
    Verde = "Verde"
}

interface Rectangulo{
    ancho: number;
    alto: number;
    color?:Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
}

function area(r:Rectangulo){
    return r.alto*r.ancho
}
const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());
rect.toString = function (){
    return this.color ? `Un rectangulo ${this.color}`: `un Rectangulo`;
}
console.log(rect.toString());
