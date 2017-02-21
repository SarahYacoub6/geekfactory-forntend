function greater(person) {
    return "hello " + person.firstname + " " + person.lastname;
}
var person = {
    firstname: 'sarah',
    lastname: 'yacoub'
};
console.log(greater(person) + 's');
// class person
// {
//     private firstName: String;
//     private lastName: String;
//     constructor(firstName: String , lastName)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// console.log(greater'sarah')+ 's'); 
