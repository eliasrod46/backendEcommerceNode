//imports
const fs = require("fs");

//Defino la clase Contenedor
class Contenedor {
  //contructor
  constructor(file) {
    this.file = file;
  }

  //Metodos

  // save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(producto) {
    try {
      // Defino variable id a asignar con el id que corresponda
      let id = -1;
      // Traigo Los productos cargado en el archivo
      let data = await fs.promises.readFile(this.file, "utf-8");
      // Convierto el  texto recibido a un array de objetos
      data = JSON.parse(data);
      // op ternario, si el array esta vacio asido 1 a la variable id
      // sino todo el id del ultimo elemento le sumo 1 y lo guardo en id
      !data.length ? (id = 1) : (id = data[data.length - 1].id + 1);
      // Creo el objeto newProduct para guardar la info del nuevo producto mas el id asignado
      const newProduct = { id, ...producto };
      // Agrego el nuevo producto al array
      data.push(newProduct);
      // Convierto el objeto a texto y lo guardo en el archivo nuevamente
      data = JSON.stringify(data, null, 2);
      await fs.promises.writeFile(this.file, data);
      // Consologueo y retorno un exto con el id asignado al producto agregado
      console.log(`Producto agregado con el id: ${id} asignado`);
      return id;
    } catch (error) {
      console.log(`Algo salio mal: ${err}`);
    }
  }

  // getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
  async getById(id) {
    try {
      // Guardo la info del archivo en la varible data
      let data = await fs.promises.readFile(this.file, "utf-8");
      // Conviernto la info recibida a un array de objetos
      data = JSON.parse(data);
      // Con findIndex buscamos el producto con el id indicado
      let index = data.findIndex((element) => element.id == id);
      // Consologueo y retorno el objeto en el caso de encotnrarlo
      if (index == -1) {
        throw new Error(`No se encontro el producto con el id: ${id}`);
      } else {
        console.log(data[index]);
        return data[index];
      }
    } catch (err) {
      console.log(`Algo salio mal: ${err}`);
    }
  }

  // getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
  async getAll() {
    try {
      // Guardo la info del archivo en la varible data
      let data = await fs.promises.readFile(this.file, "utf-8");
      // Conviernto la info recibida a un array de objetos
      data = JSON.parse(data);
      // Consologueo y retorno el array en el caso de que el archivo tenga info
      if (data.length == 0) {
        throw new Error(`No se encontraron productos en la bbdd`);
      } else {
        console.log(data);
        return data;
      }
    } catch (err) {
      console.log(`Algo salio mal: ${err}`);
    }
  }

  // deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
  async deleteById(id) {
    try {
      // Guardo la info del archivo en la varible data
      let data = await fs.promises.readFile(this.file, "utf-8");
      // Conviernto la info recibida a un array de objetos
      data = JSON.parse(data);
      // Con findIndex buscamos el producto con el id indicado
      let index = data.findIndex((element) => element.id == id);
      // si encuentra el producto lo elimno del array y guardo la info en el archivo nuevamente
      if (index == -1) {
        throw new Error(`No se encontro el producto con el id: ${id}`);
      } else {
        //Saco el producto dle arreglo
        data.splice(index, 1);
        // Conviernto la info recibida a un array de objetos
        data = JSON.stringify(data, null, 2);
        //guardo la info en el archivo
        await fs.promises.writeFile(this.file, data);
        console.log(data);
      }
    } catch (err) {
      console.log(`Algo salio mal: ${err}`);
    }
  }

  // deleteAll(): void - Elimina todos los objetos presentes en el archivo.
  async deleteAll() {
    try {
      // Sobre escribo el archivo con un array vacio
      await fs.promises.writeFile(this.file, "[]");
      console.log("se eliminaron todo los productos de la bbdd");
    } catch (err) {
      console.log(`Algo salio mal: ${err}`);
    }
  }
}

//Isntancio la clase Contenedor con el archiivo productos.txt
const nuevoContenedor = new Contenedor("./productos.txt");

//-------------------->Probando los metodos

//---------->Agregando un productos nuevo

// const productTosend = {
//   title: "ProductoAgregado",
//   price: 347,
//   thumbnail: "ProductoAgregado.jpg",
// };
// nuevoContenedor.save(productTosend);

//---------->Obtengo el producto con id 3

// nuevoContenedor.getById(3);

//---------->Elimino todos los productos dejando un array vacio

//nuevoContenedor.deleteAll();

//---------->Elimino el producto con le id 2

//nuevoContenedor.deleteById(2);

//---------->Abtengo Todos los productos

//nuevoContenedor.getAll();
