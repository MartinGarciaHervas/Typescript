// const names: Array = []; //Generic types son los types que necesitan informacion adicional, como por ejemplo los arrays. Si solo los nombramos como type Array, a typescript le va a faltar informacion sobre lo que va dentro del array, dificultandonos a nosotros mas tarde.

const names: Array<string> = []; //En este caso le estamos indicando que es un array de strings, entonces ahora typescript ya nos puede ayudar a trabajr con el, ya que sabe que contiene strings.

const promise: Promise<string> = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('This is done')
    },1000)
}) //Este es otro tipo de generic, si no le indicamos lo que la promise va a devolver, typescript no lo va a saber.

promise.then(data => {
    console.log(data)
})


//*------------------------------------------------

//En este caso, creamos una funcion, que une dos objetos. Al momento de declarar los types, usamos letras, porque de esta manera, la funcion es dinamica, es decir, que cada vez que la llamemos, pasandole 2 objetos como argumentos, typescript va a inferir el los types de los objetos, y con ello va a saber el type del objeto resultante. si nosotros en vez de poner generic types, le hubiesemos puesto que A va a ser un objeto de cierta estructura, y B de otra, entonces esa funcion quedaria atada a solo unir objetos con las estructuras descritpas.

function merge<T extends object, U extends object>(objA: T, objB: U) { //lo que hacemos con el extends objects, es indicarle a typescript, que los parametros pueden ser de cualquier type, pero si o si tienen que ser objects. eso hacemos con el extends(Se le llama constraints)
    return Object.assign({}, objA, objB)
}

const mergedObj = merge({name: 'pepe', hobbies: ['Sports']}, {age: 30})
console.log(mergedObj.name);





interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element:T): [T, string]{ //Creamos una interface con la propiedad length, y la extendemos a T, para que typescript entienda que podemos usar la propiedad length en los elements, que son de type T. 
    let descriptionText = 'Got no value.'
    if(element.length === 1){
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['hola', 'Cra']));
// console.log(countAndDescribe(30)); //* Esto no va a funcionar porque no se le puede hacer length a number.


function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U){ // La constraint keyof indica que, en este caso, el type U tiene que ser una key del objeto T.
    return `${String(key)}: ${obj[key]}`
}

console.log(extractAndConvert({name: 'Juan', age: 30}, 'name'));

