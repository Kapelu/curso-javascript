// 5️⃣ ***** EJERCICIO 5 ***** - cobrarClientes 5️⃣

// Implementar la función cobrarClientes, que recibirá una
// Queue (fila) de clientes que esperan para realizar el pago
// de sus compras del supermercado.
//
// Cada cliente dentro de la fila estará como objeto, y tendrá
// la siguiente estructura:
//
// {
//   nombre: "Jorge",
//   dinero: 1500,
//   precioProductos: 1200
// }
//
// - nombre: Nombre del cliente
// - dinero: Dinero disponible que tiene el cliente
// - precioProductos: Suma de los productos que desea comprar
//
// La función debe evaluar si el primer cliente de la fila poseee dinero suficiente
// para abonar los productos que desea comprar. En caso de ser así, debe remover
// al cliente de la fila.
// En caso de presentarse un cliente que no posee dinero suficiente, debe dejar de
// evaluar los clientes de la fila, y retornar un array con los NOMBRES de los clientes
// que fueron correctamente retirados de la fila.
//
// EJEMPLO:
//
// clientes=[
//  {
//   nombre: "Jorge",
//   dinero: 1500,
//   precioProductos: 1200
//  },
//  {
//   nombre: "Mateo",
//   dinero: 2000,
//   precioProductos: 1900
//  },
//  {
//   nombre: "Mora",
//   dinero: 5000,
//   precioProductos: 5500
//  },
//]
//
// cobrarClientes(clientes) => ["Jorge","Mateo"]
//
// ⚠️ ATENCIÓN ⚠️
// Recuerden que los "clientes" recibidos por parámetro se encuentran
// en una Queue! Por lo cual tendremos que utilizar los métodos que
// tenemos implementados para esta clase.
//
// CONSIGNAS:
//  🟢 Cuando termine de evaluar clientes, la función debe retornar un array con los nombres de los clientes que
//    han abonado correctamente.
//  🟢 En caso de quedarse sin clientes en la fila, la función debe retornar false.

function cobrarClientes(clientes) {
  // Tu código aquí:
 
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  cobrarClientes
};