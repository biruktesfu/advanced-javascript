class Person1 
{
constructor (first_name, last_name){
    this.first_name = first_name
    this.last_name = last_name
}


    greet() {
        return (`hi ${this.first_name} ${this.last_name}`);
    }
}


//4. Create  Object using ES6 class by passing firstName,lastName ["Bran Stark"]
const Bran = new Person1("Bran", "Stark")

//5. Display the greeting on Bran Object [remove the string when you have the object]
Obj_C3.innerHTML = Bran.greet();
