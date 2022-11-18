class user {
    constructor (name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    getFullName() {
        return ( ` ${this.name} ${this.lastName}`)
    }

    addMascota( name , animalTypes) {
        this.pets.push( { name , animalTypes })
    }

    countMascotas() {
        return this.pets.length;
    }

    addBook(name, author) {
        this.books.push( { name , author} )
    }

    getBookName(){
        let arrayBooks = this.books.map( author => author.name);
        return arrayBooks;
    }





};


const usuario = new user("Sebastian", "Baez", [ { name:"el libro de la selva", author: "juan perez" }, {name : "el pricipito" , author:"pepito"}, {name :"la historia del futbol", author: "fontanarrosa" }], [{name:"Garfield", animalTypes: "cat"} , {name: "Copita", animalTypes: "cat"} , { name: "Lupita", animalTypes: "cat"} , {name: "Chiquita" , animalTypes: "dog"}]);



console.log(usuario);

console.log ( usuario.getFullName() );

console.log( usuario.addMascota( "Flacuchi", "dog" ));

console.log(usuario.countMascotas())

console.log(usuario.addBook("Lo que el viento se llevo", "Pepe Argento"))

console.log(usuario.getBookName())