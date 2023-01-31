/// ========================================================================== ///
/// ============================= HENRY-ciudad ============================= ///
/// ================================== TESTS ================================= ///

const utils = require("../utils");
const actualizarCiudad = require("../controllers/03-controller");
const expect = require("chai").expect;
describe("----------`actualizarCiudad`----------", function () {
  beforeEach(function () {
    utils.reset();
  });

  it("Debe retornar un error al no encontrar la ciudad", () => {
    const ciudad1 = utils.generateCiudades();
    const ciudad2 = utils.generateCiudades();
    const ciudad3 = utils.generateCiudades();
    utils.ciudades.push(ciudad1);
    utils.ciudades.push(ciudad2);
    utils.ciudades.push(ciudad3);
    let id = Math.ceil(Math.random() * 10);
    expect(() => actualizarCiudad(id)).to.throw(
      "No se pudo encontrar la ciudad solicitada"
    );
  });

  it("Debe modificar de forma correcta la ciudad encontrada y retornar la misma", () => {
    const ciudad1 = utils.generateCiudades();
    const ciudad2 = utils.generateCiudades();
    const ciudad3 = utils.generateCiudades();
    utils.ciudades.push(ciudad1);
    utils.ciudades.push(ciudad2);
    utils.ciudades.push(ciudad3);
    const cambios = {
      id: utils.ciudades[0].id,
      nombre: utils.ciudades[0].nombre,
      poblacion: 200000,
      latitud: 230000,
      modificado: true,
    };
    const todo = [cambios, ciudad2, ciudad3];
    const cambios2 = {
      id: utils.ciudades[1].id,
      nombre: utils.ciudades[1].nombre,
      poblacion: 800000,
      latitud: false,
      modificado: true,
    };
    const todo2 = [cambios, cambios2, ciudad3];
    expect(actualizarCiudad(cambios)).to.eql(utils.ciudades[0]);
    expect(utils.ciudades).to.eql(todo);
    expect(actualizarCiudad(cambios2)).to.eql(utils.ciudades[1]);
    expect(utils.ciudades).to.eql(todo2);
  });

  it("Si alguno de los datos recibidos es undefined debe retornar un error", () => {
    const ciudad = utils.generateCiudades();
    const ciudad2 = utils.generateCiudades();
    const ciudad3 = utils.generateCiudades();
    const ciudad4 = utils.generateCiudades();
    utils.ciudades.push(ciudad);
    utils.ciudades.push(ciudad2);
    utils.ciudades.push(ciudad3);
    utils.ciudades.push(ciudad4);
    const cambios = {
      id: ciudad.id,
      nombre: ciudad.nombre,
      latitud: 130000,
      poblacion: 200000,
      modificado: undefined,
    };
    const cambios2 = {
      id: ciudad2.id,
      nombre: ciudad2.nombre,
      latitud: undefined,
      poblacion: ciudad2.poblacion,
      modificado: true,
    };
    const cambios3 = {
      id: ciudad3.id,
      nombre: ciudad3.nombre,
      latitud: 130000,
      poblacion: undefined,
      modificado: true,
    };
    const cambios4 = {
      id: ciudad3.id,
      nombre: undefined,
      latitud: ciudad3.latitud,
      poblacion: ciudad3.poblacion,
      modificado: true,
    };
    expect(() => actualizarCiudad(cambios)).to.throw(
      "Faltan datos a completar"
    );
    expect(() => actualizarCiudad(cambios2)).to.throw(
      "Faltan datos a completar"
    );
    expect(() => actualizarCiudad(cambios3)).to.throw(
      "Faltan datos a completar"
    );
    expect(() => actualizarCiudad(cambios4)).to.throw(
      "Faltan datos a completar"
    );
  });
});
