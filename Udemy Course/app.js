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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // esto le asigna un numero a cada label, admin=0, read_only=1, author=2.
//Tambien se le puede asignar un numero al primer elemento, para que los siguientes sigan ese orden, por ejemplo que admin = 5, entonces read_only = 6, y author = 7. Pueden ser tambien strings y numbers, lo que se quiera.
var person = {
    name: 'Martin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
var favoriteActivities;
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
