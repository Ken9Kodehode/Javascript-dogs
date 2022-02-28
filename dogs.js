//constructor
function Dog(name, species, age, gender) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.gender = gender;
    this.getSummary = function() {
      return `${this.name} er hundens navn. ${this.species} er rasen, og er en ${ this.age }
år gammel ${ this.gender }`;
    };
}
const dog1 = new Dog("Bonzo", "Fortausblanding", "2", "tispe");
console.log(dog1.getSummary());
// console.log(dog1.age)

//Dog number 2
const dog2 = new Dog("Sputnik", "Husky", "3", "Tispe")
console.log(dog2.getSummary());

//Dog Number 3
const dog3 = new Dog("Pepper", "Labrador ", "5", "Hann")
console.log(dog3.getSummary());


//Laget et par hunder til så du ser jeg forstår hva du har gjort :)