const telefonoDescompuesto = require("../05.js");

describe("EJERCICIO 05: telefonoDescompuesto", function () {
  it("La función generada debe devolver las consonantes del string", function () {
    var palabra1 = telefonoDescompuesto('Telefono');
    var palabra3 = telefonoDescompuesto('Telefono Descompuesto')
    var palabra2 = telefonoDescompuesto('Descompuesto');
    var palabra4 = telefonoDescompuesto('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li')
    expect(palabra1()).toBe('Tlfn');
    expect(palabra2()).toBe('Dscmpst');
    expect(palabra3()).toBe('Tlfn Dscmpst');
    expect(palabra4()).toBe('Lrm psm dlr st mt, cnscttr dpscng lt. nn cmmd l')
  });
  it("Si el argumento string no existe devolver false", function () {
    var clousureNull = telefonoDescompuesto(null);
    var clousureUndefined = telefonoDescompuesto(undefined);
    expect(clousureNull()).toEqual(false);
    expect(clousureUndefined()).toEqual(false);
  });
});
