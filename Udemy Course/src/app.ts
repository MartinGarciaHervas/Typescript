// const names: Array = []; //Generic types son los types que necesitan informacion adicional, como por ejemplo los arrays. Si solo los nombramos como type Array, a typescript le va a faltar informacion sobre lo que va dentro del array, dificultandonos a nosotros mas tarde.

const names: Array<string> = []; //En este caso le estamos indicando que es un array de strings, entonces ahora typescript ya nos puede ayudar a trabajr con el, ya que sabe que contiene strings.

const promise: Promise<string> = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('This is done')
    },2000)
}) //Este es otro tipo de generic, si no le indicamos lo que la promise va a devolver, typescript no lo va a saber.

promise.then(data => {
    console.log(data.length)
})

