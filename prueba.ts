// todo lo q typescript pueda hacer por vos mejor, es decir, escribir los menos TIPOS posibles

let persona = {
    name: 'martin',
    age: 26
}

// no hace falta decirle el tipo a variables normales, infiere su tipo

const c = 9
const d = 10
const e = c + d
// detecta automaticamente que e va a ser un number



let a

// en este caso ts le pone automaticamente un tipo 'any', que hay que evitarlo a toda costa
// basicamente le estamos diciendo q ignore el tipo


let b: unknown 

// en este caso le estas indiciando que no sbaes el tipo

// FUNCIONES

// aca si hay que decirle el tipo del parametro que va a recibir, porque no puede adivinar solo
function saludar (name: string){
    console.log('hola ' + name);   
}

saludar('martin')

// saludar(7)  , esto va a dar error

// en el caso de una funcion que tenga mas de un parametro, y esten dentro de un objeto
// hay que declarar distintos los tipos, porque sino entra en colision con la forma de declarar valores 
// por defecto de los parametros, cuando no se les asigna uno. ej:(name: 'martin') 

// primera forma
function saludar2 ({name, age}:{name: string, age: number}): number{
    console.log(`hola ${name}, tenes ${age} años`);
    return age
}

// Segunda forma
function saludar3 (persona: {name: string, age: number}){
    const {name, age} = persona //te obliga a hacer destructuring
    console.log(`hola ${name}, tenes ${age} años`);
    return age // Ts si tiene inferencia del tipo que retorna, entonces no te va a dejar hacer algo con esa respuesta que no se pueda
}

let username: string
// username = saludar3({name: 'pepe', age: 10})
//aca se va a quejar porque sabe que saludar3 retorna un number, y vos indicaste que username era un string

// en el caso de callbacks

const sayHiFromFunction = (fn : (name: string) => string) => { //en este caso hay que declarar la 'estructura' de la fn
    fn('Martin')
}

const sayHi = (name: string) => {
    return `Hi ${name}`
}

const bad = (age: number) => {
    return age
}

sayHiFromFunction(sayHi)  //esto esta bien porque sayHi retorna un string
// sayHiFromFunction(bad) //esto da error porque bad retorna un number, y arriba declaramos que la funcion tenia que retornar un string


//Objetos

let hero = {
    name: 'thor',
    age: 1500
}

// type alias
// esto significa que podemos crear un type


//se pueden crear tipos mas especificos como por ejemplo
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
    //Propiedades de propiedades :)
    readonly id?: HeroId //en este caso, estamos diciendo que la propiedad id, solo se puede leer, y no cambiar
    name: string
    age: number
    //Optional properties
    isActive?: boolean //con el ?, se declara una nueva propiedad que no es necesariamente obligatoria
}

function createHero (name: string, age: number): Hero {
    return {name, age, id:crypto.randomUUID()}
}

const thor = createHero('Thor', 1500)

// thor.id = 'jamon' // esto va a dar error porque le pusimos la propiedad de readonly

// Union Types
// una variable puede tener varios types

let annn: number | string

annn = 1
annn = 'hola'

// puede ser hasta mas especifico
let onnn: 2 | string

let jam: 'crudo' | 'cocido' 

// podemos crear types con de distitnos valores
type Power = 'low' | 'high' | 'superhigh'

// let power: Power = 'choto' //me va a dar error
let power: Power = 'low'


// Type intersection
// se pueden unir dos tipos para crear un tipo nuevo

type BasicInfo = {
    name: string
    age: number
}

type AllInfo = {
    address: string
    country: string
    height: number
}

type PersonInfo = BasicInfo & AllInfo //en este caso el type contendra a los otros dos


//arrays

//si al array no le asignamos type, va por predeterminado que es un array vacio, osea que no va a aceptar valores

const hola = [] // en este caso el type de hola es never[]

// para asignar un tipo se hace asi

const bien: string[] = [] // en este caso va a ser un array de strings

const bien2: (string | number)[]=[] // en este caso el array es de strings y numbers

//tuplas
//sirven para determinar de manera exacta, como queremos que sea un array

//si yo quiero lograr un gameboard asi:
// [
//     ['X', '0', 'X'],
//     ['X', '0', 'X'],
//     ['X', '0', 'X']
// ]

type CellValue = 'X' | '0' | ''
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameboard: GameBoard = [
        ['X', '0', 'X'],
        ['X', '0', 'X'],
        ['X', '0', 'X']
    ]


// Enums

// se usan para una cantidad de datos finitos, que sean pocos, es decir que puedas controlar. no pueden ser dinamicos

const enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED
}

function mostrarMensaje (tipoDeError: ERROR_TYPES) {
    if(tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encontro el mensaje');
    } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('etc');
    }
}

//Interfaces

interface Product {
    id: number
    number: number
    price: number
}

// Las interfaces son como los tipos solo que permite hacer algunas cosas que los tipos no, por ejemplo:

// 1. Nombrar dos veces la misma interfaz, dando lugar a que ahora la interfaz sera las dos en conjunto

interface CarritoOps {
    add: (product: Product) => void,
    remove: (id: number)=> void,
}

interface CarritoOps {
    clear: ()=> void
}

// Esto puede causar que sin querer, mutemos la interfaz original, y solo mostrara el problema cuando la usemos.

// 2. Extender una de otra, es decir, que usa las propiedades de otra interfaz, mas las que le agregues

interface Zapatilla extends Product {
    calza: number
}

// Ahora la interfaz Zapatilla tiene todas las propiedades de producto, mas calza

// 3. IMPORTANTE. Con las interfaces no se pueden hacer tipos primitivos:
// interface HeroId = `${number}${string}` -----> esto NO existe. solo se puede con un type.

// Narrowing
// esto es basicamente el concepto de hacer mas especifico algo.
// hay veces que declaramos en una funcion, que un parametro puede ser de un tipo u otro, en ese caso, cada tipo tiene distintos metodos, que solo podremos ejecutar, sabiendo con certeza que es de ese tipo. aqui se implementa el narrowing
// entonces haces un if, o a veces, tenes que realizar una function que chequee que es de ese tipo:

interface Mario {
    company: 'Nintendo'
    saltar: ()=>void
}

interface Sonic {
    company: 'Sega'
    correr: ()=> void
}

type Personaje = Mario | Sonic

// Type guard (Siempre que se pueda hay que evitar esto)

function checkIsSonic (personaje: Personaje) : personaje is Sonic {
    return (personaje as Sonic).correr != undefined
}

// una vez chequeado que es Sonic, ya sabemos que podemos usar el metodo correr, que es propio de Sonic

function jugar(personaje: Personaje) {
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}