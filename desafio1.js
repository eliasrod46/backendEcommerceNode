//Defino la clase Usuaurio
class Usuario{
  //contructor
  constructor(nombre,apellido,libros,mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
  }

  //Metodos

  getFullName(){
    //: String. Retorna el completo del usuario. Utilizar template strings.

    return `${this.nombre} ${this.apellido}`
  }
  
  addMascota(nuevaMascota){
    //: void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    this.mascotas.push(nuevaMascota)
  }
  
  countMascotas(){
    //: Number. Retorna la cantidad de mascotas que tiene el usuario.
    return this.mascotas.length
  }
  
  addBook(nombre, autor){
    //: void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    this.libros.push({nombre,autor})

  }
  
  getBookNames(){
    //: String[]. Retorna un array con sólo los nombres del array de libros del usuario. 
    let nombresLibros = []
    this.libros.forEach(libro => {
      nombresLibros.push(libro.nombre)
    });

    return nombresLibros
    
  }
}

//Variables con datos para instanciar objeto
let firstName = "Elias"
let lastName = "Rodriguez"
let books = [{nombre:"IT",autor:"Stephen King"},{nombre:"20000 Leguas..",autor:"Julio Verne"},{nombre:"Mitos de Cthulhu",autor:"Howard Phillips Lovecraft"}]
let puppys = ["Mascota 1", "Mascota 2", "Mascota 3"]

//Instancio la clase Usuario - Crea un objeto de tipo Usuario
const usuario = new Usuario(firstName,lastName,books,puppys);

//Probando metodos!
console.log(usuario.getFullName())

usuario.addMascota("Mascota 4")

console.log(`${usuario.getFullName()} tiene ${usuario.countMascotas()} mascotas`)

usuario.addBook("El resplandor","Stephen King")

console.log(`Los libros favoritos de ${usuario.getFullName()} son ${usuario.getBookNames()}`)
