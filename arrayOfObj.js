const persons = [
    {id: 1, name: 'rased', salary: 20000},
    {id: 2, name: 'rasel', salary: 18000},
    {id: 3, name: 'roshid', salary: 22000},
]

//forEach - forEach can't return anything
const Id = persons.forEach(item => item.id)
console.log(Id) //result - undefined || forEach can't return anything

persons.forEach(item => console.log(item.id))


//map - provide a new array of result
const personName = persons.map(item => item.name);
console.log(personName);


//find - provide first element in an array 
const personSalary = persons.find(item => item.salary <= 20000);
console.log(personSalary) // return first object


//filter -return all elements from the original array that satisfy a given condition 
const personSalary2 = persons.filter(item => item.salary <= 20000);
console.log(personSalary2) // return first + second object


//reduce -provide total number of results
const totalSalary = persons.reduce((acc, cur) => acc + cur.salary, 0);
console.log(totalSalary)