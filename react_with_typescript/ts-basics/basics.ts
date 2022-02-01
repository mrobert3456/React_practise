//primitives

let age: number;

age = 12;

let userName : string ;
userName='vmi';

let isVmi :boolean;
isVmi=true;

//complex types

let hobbies: string[];

hobbies = ['éé','ss'];

type Person = {
    name: string;
    age: number;
};

let person: Person;
person ={
    name:'va',
    age:32
};

let people: Person[]; 

//type inference

let course: string | number ='avamsvs';

course =5252;


//functions and types
function add(a:number,b:number):number{
    return a+b;
};


//generics

function insertAtbeginning<T>(array:T[], value:T){
    const newArray = [value,...array];
    return newArray;
}