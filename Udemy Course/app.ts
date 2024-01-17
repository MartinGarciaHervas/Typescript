// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Martin',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];

console.log(person);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}