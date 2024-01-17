// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //esto es una TUPLE (tupla). la diferencia es que se le especifica que su valor solo puede ser un [] que dentro contenga UN number y UN string. En este caso tuvimos que especificar los tipos a mano, porque sino typescript infiere que en vez de una tuple, es un array que puede contener numbers y strings.
// } = {
// // const person = {
//     name: 'Martin',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR} // esto le asigna un numero a cada label, admin=0, read_only=1, author=2.
//Tambien se le puede asignar un numero al primer elemento, para que los siguientes sigan ese orden, por ejemplo que admin = 5, entonces read_only = 6, y author = 7. Pueden ser tambien strings y numbers, lo que se quiera.

const person = {
    name: 'Martin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}

let favoriteActivities: string[];

console.log(person);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}