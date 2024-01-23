// const names: Array = []; //Generic types son los types que necesitan informacion adicional, como por ejemplo los arrays. Si solo los nombramos como type Array, a typescript le va a faltar informacion sobre lo que va dentro del array, dificultandonos a nosotros mas tarde.

const names: Array<string> = []; //En este caso le estamos indicando que es un array de strings, entonces ahora typescript ya nos puede ayudar a trabajr con el, ya que sabe que contiene strings.

const promise: Promise<string> = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('This is done')
    },5000)
}) //Este es otro tipo de generic, si no le indicamos lo que la promise va a devolver, typescript no lo va a saber.

promise.then(data => {
    console.log(data)
})


//*------------------------------------------------

//En este caso, creamos una funcion, que une dos objetos. Al momento de declarar los types, usamos letras, porque de esta manera, la funcion es dinamica, es decir, que cada vez que la llamemos, pasandole 2 objetos como argumentos, typescript va a inferir el los types de los objetos, y con ello va a saber el type del objeto resultante. si nosotros en vez de poner generic types, le hubiesemos puesto que A va a ser un objeto de cierta estructura, y B de otra, entonces esa funcion quedaria atada a solo unir objetos con las estructuras descritpas.

function merge<T, U>(objA: T, objB: U) {
    return Object.assign({}, objA, objB)
}

const mergedObj = merge({name: 'pepe', hobbies: ['Sports']}, {age: 30})
console.log(mergedObj.name);
