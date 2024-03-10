// CarritoCompra.test.js

const {CarritoCompra} = require('../index');

describe('CarritoCompra', () => {
    let carrito;
  
    beforeEach(() => {
      // Se ejecuta antes de cada prueba
      carrito = new CarritoCompra();
    });
  
    it('debería agregar un producto correctamente', () => {
      const producto = { nombre: 'Producto1', precio: 20 };
      carrito.agregarProducto(producto);
      expect(carrito.productos).toContain(producto);
    });
  
    it('debería calcular el total correctamente', () => {
      carrito.agregarProducto({ nombre: 'Producto1', precio: 20 });
      carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });
      expect(carrito.calcularTotal()).toBe(50);
    });
  
    it('debería aplicar descuento correctamente', () => {
      carrito.agregarProducto({ nombre: 'Producto1', precio: 20 });
      carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });
      const totalConDescuento = carrito.aplicarDescuento(10);
      expect(totalConDescuento).toBe(45);
    });
  
    // Puedes agregar más pruebas según tus necesidades
  });