const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple - określona długość tablicy
} = {
    name: 'Paulina',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person)