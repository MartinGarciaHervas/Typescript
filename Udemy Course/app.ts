const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string] //esto es una TUPLE (tupla). la diferencia es que se le especifica que su valor solo puede ser un [] que dentro contenga UN number y UN string. En este caso tuvimos que especificar los tipos a mano, porque sino typescript infiere que en vez de una tuple, es un array que puede contener numbers y strings.
} = {
// const person = {
    name: 'Martin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

let favoriteActivities: string[];

console.log(person);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}